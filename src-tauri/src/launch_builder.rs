use std::path::{Path, PathBuf};

#[derive(Debug, Clone, PartialEq, Eq)]
pub(crate) enum LaunchMode {
    ExternalJava,
    ExternalGeneric,
}

#[derive(Debug, Clone)]
pub(crate) struct LaunchComposeInput {
    pub executable: Option<String>,
    pub args: Vec<String>,
    pub working_dir: Option<String>,
    pub version: String,
    pub runtime_root: PathBuf,
    pub default_java_path: Option<String>,
}

#[derive(Debug, Clone)]
pub(crate) struct LaunchPlan {
    pub mode: LaunchMode,
    pub executable: String,
    pub args: Vec<String>,
    pub working_dir: Option<PathBuf>,
}

fn path_like(value: &str) -> bool {
    value.contains('/') || value.contains('\\') || value.contains(':')
}

fn is_java_executable(value: &str) -> bool {
    let lower = value.trim().to_ascii_lowercase();
    lower.ends_with("\\java.exe")
        || lower.ends_with("/java")
        || lower.ends_with("/java.exe")
        || lower == "java"
        || lower == "java.exe"
}

fn parse_heap_megabytes(value: &str) -> Option<u64> {
    if !(value.starts_with("-Xmx") || value.starts_with("-Xms")) {
        return None;
    }
    let raw = &value[4..].trim();
    if raw.is_empty() {
        return None;
    }

    let mut digits = String::new();
    let mut unit = String::new();
    for ch in raw.chars() {
        if ch.is_ascii_digit() && unit.is_empty() {
            digits.push(ch);
        } else {
            unit.push(ch);
        }
    }

    let base = digits.parse::<u64>().ok()?;
    let mul = match unit.to_ascii_lowercase().as_str() {
        "" => 1,
        "k" => 1 / 1024,
        "m" => 1,
        "g" => 1024,
        "t" => 1024 * 1024,
        _ => return None,
    };
    Some(base.saturating_mul(mul.max(1)))
}

fn find_launch_target_index(args: &[String]) -> Option<usize> {
    for (idx, arg) in args.iter().enumerate() {
        if arg == "-jar" || arg == "-cp" || arg == "-classpath" {
            return Some(idx);
        }
        if !arg.starts_with('-') {
            return Some(idx);
        }
    }
    None
}

fn ensure_launch_target(runtime_root: &Path, version: &str) -> Result<PathBuf, String> {
    let default_jar = runtime_root
        .join("versions")
        .join(version)
        .join(format!("{}.jar", version));
    if default_jar.exists() {
        Ok(default_jar)
    } else {
        Err(format!(
            "java launch target missing for version '{}'; run provisioning first",
            version
        ))
    }
}

fn split_java_args(args: &[String]) -> (Vec<String>, Vec<String>) {
    let mut jvm = Vec::new();
    let mut game = Vec::new();
    let mut after_delimiter = false;
    for arg in args {
        if arg == "--" && !after_delimiter {
            after_delimiter = true;
            continue;
        }
        if after_delimiter {
            game.push(arg.clone());
        } else {
            jvm.push(arg.clone());
        }
    }
    (jvm, game)
}

fn validate_java_memory(jvm_args: &[String]) -> Result<(), String> {
    let mut min_heap: Option<u64> = None;
    let mut max_heap: Option<u64> = None;
    for arg in jvm_args {
        if arg.starts_with("-Xms") {
            min_heap = parse_heap_megabytes(arg);
            if min_heap.is_none() {
                return Err(format!("invalid JVM min heap argument '{}'", arg));
            }
        }
        if arg.starts_with("-Xmx") {
            max_heap = parse_heap_megabytes(arg);
            if max_heap.is_none() {
                return Err(format!("invalid JVM max heap argument '{}'", arg));
            }
        }
    }

    if let (Some(min), Some(max)) = (min_heap, max_heap) {
        if min > max {
            return Err(format!(
                "invalid JVM memory settings: -Xms ({} MB) cannot exceed -Xmx ({} MB)",
                min, max
            ));
        }
    }

    Ok(())
}

fn compose_java_args(
    runtime_root: &Path,
    version: &str,
    user_args: &[String],
) -> Result<Vec<String>, String> {
    let (mut jvm_args, mut game_args) = split_java_args(user_args);

    if !jvm_args.iter().any(|arg| arg.starts_with("-Xms")) {
        jvm_args.insert(0, "-Xms1G".to_string());
    }
    if !jvm_args.iter().any(|arg| arg.starts_with("-Xmx")) {
        jvm_args.insert(1, "-Xmx2G".to_string());
    }
    validate_java_memory(&jvm_args)?;

    if game_args.is_empty() {
        let has_target = find_launch_target_index(&jvm_args).is_some();
        if !has_target {
            let jar = ensure_launch_target(runtime_root, version)?;
            game_args.push("-jar".to_string());
            game_args.push(jar.to_string_lossy().to_string());
        }
    }

    if let Some(idx) = find_launch_target_index(&game_args) {
        if game_args[idx] == "-jar" && game_args.get(idx + 1).is_none() {
            return Err("'-jar' requires a jar path argument".to_string());
        }
        if (game_args[idx] == "-cp" || game_args[idx] == "-classpath")
            && game_args.get(idx + 1).is_none()
        {
            return Err("'-cp/-classpath' requires a classpath value".to_string());
        }
    }

    let mut combined = Vec::with_capacity(jvm_args.len() + game_args.len());
    combined.extend(jvm_args);
    combined.extend(game_args);
    Ok(combined)
}

pub(crate) fn compose_launch_plan(input: LaunchComposeInput) -> Result<LaunchPlan, String> {
    let working_dir = input
        .working_dir
        .as_ref()
        .map(|item| item.trim())
        .filter(|item| !item.is_empty())
        .map(PathBuf::from);

    if let Some(dir) = working_dir.as_ref() {
        if !dir.exists() {
            return Err(format!(
                "working directory does not exist: {}",
                dir.display()
            ));
        }
        if !dir.is_dir() {
            return Err(format!(
                "working directory is not a directory: {}",
                dir.display()
            ));
        }
    }

    let executable = input
        .executable
        .as_ref()
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
        .or_else(|| {
            input
                .default_java_path
                .as_ref()
                .map(|item| item.trim().to_string())
        });

    let executable = match executable {
        Some(value) => value,
        None => return Err("launch executable is required".to_string()),
    };

    if path_like(&executable) {
        let path = PathBuf::from(&executable);
        if !path.exists() {
            return Err(format!("launch executable not found: {}", path.display()));
        }
    }

    if is_java_executable(&executable) {
        let args = compose_java_args(&input.runtime_root, &input.version, &input.args)?;
        return Ok(LaunchPlan {
            mode: LaunchMode::ExternalJava,
            executable,
            args,
            working_dir,
        });
    }

    Ok(LaunchPlan {
        mode: LaunchMode::ExternalGeneric,
        executable,
        args: input.args,
        working_dir,
    })
}

#[cfg(test)]
mod tests {
    use super::*;
    use std::fs;

    #[test]
    fn compose_plan_requires_executable() {
        let err = compose_launch_plan(LaunchComposeInput {
            executable: None,
            args: Vec::new(),
            working_dir: None,
            version: "1.21.4".to_string(),
            runtime_root: PathBuf::from("C:/missing"),
            default_java_path: None,
        })
        .expect_err("compose should fail");

        assert!(err.contains("required"));
    }

    #[test]
    fn compose_java_adds_memory_defaults() {
        let temp_root = std::env::temp_dir().join(format!(
            "orbiq_launch_builder_{}_{}",
            std::process::id(),
            crate::storage::unix_epoch_now()
        ));
        let version = "1.21.4";
        let jar_path = temp_root
            .join("versions")
            .join(version)
            .join(format!("{}.jar", version));
        fs::create_dir_all(jar_path.parent().expect("jar parent")).expect("create dirs");
        fs::write(&jar_path, "jar").expect("create jar");

        let result = compose_launch_plan(LaunchComposeInput {
            executable: Some("java".to_string()),
            args: vec![],
            working_dir: None,
            version: version.to_string(),
            runtime_root: temp_root.clone(),
            default_java_path: None,
        })
        .expect("compose should succeed");

        assert_eq!(result.mode, LaunchMode::ExternalJava);
        assert!(result.args.iter().any(|item| item.starts_with("-Xms")));
        assert!(result.args.iter().any(|item| item.starts_with("-Xmx")));
        assert!(result.args.iter().any(|item| item == "-jar"));

        fs::remove_file(&jar_path).ok();
        fs::remove_dir_all(&temp_root).ok();
    }

    #[test]
    fn compose_java_rejects_invalid_heap_range() {
        let err = compose_launch_plan(LaunchComposeInput {
            executable: Some("java".to_string()),
            args: vec![
                "-Xmx512M".to_string(),
                "-Xms1G".to_string(),
                "--".to_string(),
                "com.example.Main".to_string(),
            ],
            working_dir: None,
            version: "1.21.4".to_string(),
            runtime_root: PathBuf::from("C:/none"),
            default_java_path: None,
        })
        .expect_err("compose should fail");

        assert!(err.contains("cannot exceed"));
    }
}
