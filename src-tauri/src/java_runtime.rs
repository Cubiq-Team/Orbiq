use std::collections::HashSet;
use std::env;
use std::ffi::OsString;
use std::fs;
use std::path::{Path, PathBuf};
use std::process::Command;

use crate::domain::{JavaRuntimeCandidate, JavaRuntimeInfoResponse};

#[derive(Debug, Clone)]
struct JavaProbe {
    path: PathBuf,
    version: Option<String>,
    major: Option<u32>,
    source: String,
}

fn unique_key(path: &Path) -> String {
    path.to_string_lossy().to_ascii_lowercase()
}

fn java_from_java_home() -> Option<PathBuf> {
    env::var_os("JAVA_HOME")
        .map(PathBuf::from)
        .map(|home| home.join("bin").join(java_executable_name()))
        .filter(|path| path.exists())
}

fn java_executable_name() -> &'static str {
    if cfg!(windows) {
        "java.exe"
    } else {
        "java"
    }
}

fn java_from_path_variable() -> Vec<PathBuf> {
    let mut results = Vec::new();
    let mut seen = HashSet::<String>::new();

    let path_value = match env::var_os("PATH") {
        Some(value) => value,
        None => return results,
    };

    for entry in env::split_paths(&path_value) {
        let candidate = entry.join(java_executable_name());
        if candidate.exists() {
            let key = unique_key(&candidate);
            if seen.insert(key) {
                results.push(candidate);
            }
        }
    }

    results
}

fn read_dir_paths(path: &Path) -> Vec<PathBuf> {
    let mut out = Vec::new();
    if let Ok(entries) = fs::read_dir(path) {
        for entry in entries.flatten() {
            out.push(entry.path());
        }
    }
    out
}

fn java_from_common_windows_locations() -> Vec<PathBuf> {
    if !cfg!(windows) {
        return Vec::new();
    }

    let roots = vec![
        PathBuf::from(r"C:\Program Files\Java"),
        PathBuf::from(r"C:\Program Files (x86)\Java"),
        PathBuf::from(r"C:\Program Files\Eclipse Adoptium"),
        PathBuf::from(r"C:\Program Files\Microsoft"),
        PathBuf::from(r"C:\Program Files\BellSoft"),
        PathBuf::from(r"C:\Program Files\Zulu"),
    ];

    let mut out = Vec::new();
    let mut seen = HashSet::<String>::new();
    for root in roots {
        for dir in read_dir_paths(&root) {
            let name = dir
                .file_name()
                .unwrap_or(&OsString::new())
                .to_string_lossy()
                .to_ascii_lowercase();
            if !(name.contains("jdk")
                || name.contains("jre")
                || name.contains("temurin")
                || name.contains("zulu")
                || name.contains("openjdk")
                || name.contains("corretto"))
            {
                continue;
            }

            let candidate = dir.join("bin").join("java.exe");
            if candidate.exists() {
                let key = unique_key(&candidate);
                if seen.insert(key) {
                    out.push(candidate);
                }
            }
        }
    }
    out
}

fn parse_java_version_output(output: &str) -> (Option<String>, Option<u32>) {
    let trimmed = output.trim();
    if trimmed.is_empty() {
        return (None, None);
    }

    let mut version: Option<String> = None;
    if let Some(idx) = trimmed.find("version \"") {
        let start = idx + "version \"".len();
        if let Some(end_rel) = trimmed[start..].find('"') {
            version = Some(trimmed[start..start + end_rel].to_string());
        }
    }

    if version.is_none() {
        for token in trimmed.split_whitespace() {
            let has_digit = token.chars().any(|ch| ch.is_ascii_digit());
            if has_digit && (token.contains('.') || token.chars().all(|ch| ch.is_ascii_digit())) {
                version = Some(token.trim_matches('"').to_string());
                break;
            }
        }
    }

    let major = version.as_deref().and_then(|v| parse_java_major(v));

    (version, major)
}

fn parse_java_major(version: &str) -> Option<u32> {
    let clean = version.trim();
    if clean.is_empty() {
        return None;
    }

    if let Some(rest) = clean.strip_prefix("1.") {
        let value = rest.split('.').next().unwrap_or(rest);
        return value.parse::<u32>().ok();
    }

    let first = clean
        .split(|c: char| !c.is_ascii_digit())
        .find(|part| !part.is_empty())?;
    first.parse::<u32>().ok()
}

fn probe_java(path: PathBuf, source: &str) -> JavaProbe {
    let output = Command::new(&path).arg("-version").output();
    let (version, major) = match output {
        Ok(out) => {
            let text = format!(
                "{}\n{}",
                String::from_utf8_lossy(&out.stderr),
                String::from_utf8_lossy(&out.stdout)
            );
            parse_java_version_output(&text)
        }
        Err(_) => (None, None),
    };

    JavaProbe {
        path,
        version,
        major,
        source: source.to_string(),
    }
}

fn collect_java_candidates() -> Vec<JavaProbe> {
    let mut probes = Vec::new();
    let mut seen = HashSet::<String>::new();

    if let Some(path) = java_from_java_home() {
        let key = unique_key(&path);
        if seen.insert(key) {
            probes.push(probe_java(path, "java_home"));
        }
    }

    for path in java_from_path_variable() {
        let key = unique_key(&path);
        if seen.insert(key) {
            probes.push(probe_java(path, "path"));
        }
    }

    for path in java_from_common_windows_locations() {
        let key = unique_key(&path);
        if seen.insert(key) {
            probes.push(probe_java(path, "windows_common"));
        }
    }

    probes
}

pub(crate) fn get_java_runtime_info(minimum_major: u8) -> JavaRuntimeInfoResponse {
    let min_major = u32::from(minimum_major);
    let mut probes = collect_java_candidates();
    probes.sort_by(|a, b| {
        let am = a.major.unwrap_or(0);
        let bm = b.major.unwrap_or(0);
        bm.cmp(&am).then_with(|| a.path.cmp(&b.path))
    });

    let default_probe = probes
        .iter()
        .find(|item| item.major.unwrap_or(0) >= min_major)
        .or_else(|| probes.first());

    let default_path = default_probe.map(|item| item.path.to_string_lossy().to_string());
    let candidates = probes
        .into_iter()
        .map(|probe| JavaRuntimeCandidate {
            path: probe.path.to_string_lossy().to_string(),
            version: probe.version,
            major: probe.major,
            source: probe.source,
        })
        .collect::<Vec<_>>();

    JavaRuntimeInfoResponse {
        minimum_major: minimum_major as u32,
        default_path,
        candidates,
    }
}

#[cfg(test)]
mod tests {
    use super::{parse_java_major, parse_java_version_output};

    #[test]
    fn parse_java_major_handles_legacy_and_modern_versions() {
        assert_eq!(parse_java_major("1.8.0_421"), Some(8));
        assert_eq!(parse_java_major("17.0.9"), Some(17));
        assert_eq!(parse_java_major("21"), Some(21));
        assert_eq!(parse_java_major(""), None);
    }

    #[test]
    fn parse_java_version_output_extracts_version() {
        let sample = r#"openjdk version "21.0.2" 2024-01-16
OpenJDK Runtime Environment"#;
        let (version, major) = parse_java_version_output(sample);
        assert_eq!(version.as_deref(), Some("21.0.2"));
        assert_eq!(major, Some(21));
    }
}
