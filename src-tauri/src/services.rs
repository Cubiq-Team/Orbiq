use crate::storage::RuntimeState;

#[derive(Debug, Clone, Copy)]
pub(crate) enum ProcessTerminalState {
    Stopped,
    Failed,
}

#[derive(Debug, Clone)]
pub(crate) struct ProcessTransition {
    pub(crate) instance_name: String,
    pub(crate) state: ProcessTerminalState,
    pub(crate) exit_code: Option<i32>,
    pub(crate) reason: Option<String>,
}

pub(crate) fn normalize_optional(value: Option<String>) -> Option<String> {
    value
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
}

pub(crate) fn normalize_args(values: Vec<String>) -> Vec<String> {
    values
        .into_iter()
        .map(|item| item.trim().to_string())
        .filter(|item| !item.is_empty())
        .collect()
}

pub(crate) fn refresh_processes(runtime: &mut RuntimeState) -> Vec<ProcessTransition> {
    let mut finished = Vec::new();
    let mut transitions = Vec::new();

    for (name, handle) in runtime.processes.iter_mut() {
        match handle.child.try_wait() {
            Ok(Some(status)) => {
                let (state, reason) = if status.success() {
                    (ProcessTerminalState::Stopped, None)
                } else {
                    let message = match status.code() {
                        Some(code) => format!("process exited with code {}", code),
                        None => "process exited with non-zero status".to_string(),
                    };
                    (ProcessTerminalState::Failed, Some(message))
                };
                transitions.push(ProcessTransition {
                    instance_name: name.clone(),
                    state,
                    exit_code: status.code(),
                    reason,
                });
                finished.push(name.clone());
            }
            Ok(None) => {}
            Err(err) => {
                transitions.push(ProcessTransition {
                    instance_name: name.clone(),
                    state: ProcessTerminalState::Failed,
                    exit_code: None,
                    reason: Some(format!("process state check failed: {}", err)),
                });
                finished.push(name.clone());
            }
        }
    }

    for name in finished {
        runtime.processes.remove(&name);
        if let Some(instance) = runtime.instances.iter_mut().find(|item| item.name == name) {
            instance.running = false;
        }
    }

    transitions
}
