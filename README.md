# 🚀 Orbiq Minecraft Launcher

<div align="center">

![Orbiq Logo](Orbiq.svg)

**A modern, lightweight, and production-ready Minecraft launcher built with Tauri and Rust**

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](License.md)
[![Version](https://img.shields.io/badge/version-1.0.0-green.svg)](package.json)
[![Tauri](https://img.shields.io/badge/Tauri-2.10.3-blue.svg)](https://tauri.app)
[![Rust](https://img.shields.io/badge/Rust-1.77.2+-orange.svg)](https://www.rust-lang.org)

[Features](#-features) • [Installation](#-installation) • [Development](#-development) • [Architecture](#-architecture) • [Documentation](#-documentation) • [Contributing](#-contributing)

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Features](#-features)
- [Screenshots](#-screenshots)
- [Installation](#-installation)
- [Development](#-development)
  - [Prerequisites](#prerequisites)
  - [Setup](#setup)
  - [Running](#running)
  - [Building](#building)
  - [Testing](#testing)
- [Architecture](#-architecture)
  - [Backend Structure](#backend-structure)
  - [Frontend Structure](#frontend-structure)
- [Project Structure](#-project-structure)
- [Commands Reference](#-commands-reference)
- [Configuration](#-configuration)
- [Documentation](#-documentation)
- [Roadmap](#-roadmap)
- [Troubleshooting](#-troubleshooting)
- [Contributing](#-contributing)
- [License](#-license)
- [Acknowledgments](#-acknowledgments)

---

## 🌟 Overview

**Orbiq** is a next-generation Minecraft launcher designed to be fast, reliable, and user-friendly. Built with modern web technologies and Rust, it provides a seamless experience for managing Minecraft instances, mods, and profiles.

### Why Orbiq?

- **🚀 Lightning Fast**: Built with Rust for maximum performance
- **🎨 Modern UI**: Beautiful, animated interface with smooth transitions
- **🔒 Secure**: OAuth authentication with secure token storage
- **📦 Smart Management**: Intelligent mod dependency resolution
- **🔧 Developer Friendly**: Well-documented, modular architecture
- **🌐 Cross-Platform Ready**: Windows-first, with plans for macOS and Linux

---

## ✨ Features

### Core Functionality

#### 🎮 Instance Management
- **Create & Configure**: Set up multiple Minecraft instances with different versions and mod loaders
- **Persistent State**: All configurations survive app restarts with automatic backup
- **Instance Lifecycle**: Track instance states (`starting`, `running`, `stopped`, `failed`)
- **Exit Metadata**: Capture and persist crash/exit information for debugging

#### 🔐 Authentication & Profiles
- **Microsoft OAuth**: Secure device-code login flow
- **Offline Profiles**: Full offline mode support for local gameplay
- **Token Management**: Automatic token refresh with OS keyring storage
- **Profile Switching**: Quick profile switching with account metadata tracking

#### 📥 Provisioning & Downloads
- **Smart Downloads**: Resumable downloads with checksum validation
- **Parallel Processing**: Bounded concurrency for optimal performance
- **Retry Logic**: Automatic retry on failed downloads
- **Asset Management**: Complete manifest, library, and asset provisioning pipeline

#### ☕ Java Runtime Management
- **Auto-Detection**: Automatically detect system Java installations
- **Version Validation**: Ensure minimum Java version requirements
- **Per-Instance Override**: Set custom Java paths for specific instances
- **JVM Arguments**: Advanced JVM argument configuration and validation

#### 🔌 Mod Loader Support
- **Forge**: Full support for Forge mod loader
- **Fabric**: Complete Fabric integration
- **NeoForge**: NeoForge compatibility
- **Quilt**: Quilt mod loader support
- **Vanilla**: Pure vanilla Minecraft instances

#### 🛡️ Preflight Checks
- **Dependency Validation**: Check mod dependencies before launch
- **Compatibility Checks**: Loader/version compatibility matrix validation
- **Conflict Detection**: Identify incompatible mods (e.g., Iris/Sodium conflicts)
- **Fix Suggestions**: Actionable fixes for common issues

#### 🐛 Diagnostics & Debugging
- **Debug Bundle Export**: One-click export of logs and diagnostic data
- **Error Tracking**: Structured error codes for all failure scenarios
- **Launch Context**: Detailed launch attempt history
- **Diagnostics Modal**: In-app diagnostics viewer with fix suggestions

#### 🎨 User Interface
- **3D Skin Viewer**: Real-time 3D Minecraft skin rendering with skinview3d
- **Animated Banners**: Beautiful instance banners with smooth animations
- **Responsive Design**: Adaptive layout for different screen sizes
- **Dark Theme**: Eye-friendly dark mode interface

---

## 📸 Screenshots

> *Screenshots coming soon - the launcher features a modern, animated interface with instance cards, profile management, and real-time 3D skin rendering.*

---

## 💾 Installation

### For Users

#### Windows

1. Download the latest release from [Releases](https://github.com/CubiqTeam/Orbiq/releases)
2. Choose your preferred installer:
   - **MSI Installer**: Traditional Windows installer
   - **NSIS Installer**: Lightweight setup wizard
3. Run the installer and follow the prompts
4. Launch Orbiq from your Start Menu or Desktop

### System Requirements

- **OS**: Windows 10/11 (64-bit)
- **RAM**: 4GB minimum, 8GB recommended
- **Storage**: 500MB for launcher + space for Minecraft instances
- **Java**: Java 8+ (auto-detected or manually configured)

---

## 🛠️ Development

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: v16+ ([Download](https://nodejs.org/))
- **Rust**: Latest stable ([Install](https://rustup.rs/))
- **Tauri CLI**: Install via cargo
  ```bash
  cargo install tauri-cli
  ```
- **Git**: For version control ([Download](https://git-scm.com/))

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/CubiqTeam/Orbiq.git
   cd Orbiq
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

### Running

#### Development Mode

**Option 1: Full Tauri Development**
```bash
npm run tauri:dev
```
This starts the Tauri app with hot-reload for both frontend and backend.

**Option 2: Web-Only Development**
```bash
npm run dev:web
```
This builds the web assets and starts a development server for frontend-only testing.

#### Production Build

```bash
npm run tauri:build
```
This creates production-ready installers in `src-tauri/target/release/bundle/`.

### Building

#### Build Web Assets Only
```bash
npm run build:web
```

#### Build Complete Application
```bash
npm run tauri:build
```

Build artifacts will be located in:
- **MSI**: `src-tauri/target/release/bundle/msi/`
- **NSIS**: `src-tauri/target/release/bundle/nsis/`

### Testing

#### Backend Tests
```bash
npm run test:backend
```
Runs all Rust unit and integration tests.

#### Smoke Tests
```bash
# Run all smoke tests
npm run test:smoke

# Test browse runtime functionality
npm run test:browse

# Test mod loader compatibility
npm run test:loaders

# Test installation matrix
npm run test:install-matrix
```

#### Quality Checks
```bash
# Check rollback readiness
npm run release:rollback-check

# Monitor post-release metrics
npm run monitor:post-release
```

---

## 🏗️ Architecture

Orbiq follows a clean, layered architecture separating concerns between frontend and backend.

### Backend Structure

The Rust backend is organized into modular components:

```
src-tauri/src/
├── lib.rs              # Main entry point, Tauri setup
├── commands.rs         # Tauri command handlers (API boundary)
├── domain.rs           # Domain models and DTOs
├── storage.rs          # State persistence and migrations
├── services.rs         # Shared service utilities
├── auth.rs             # Authentication logic
├── provisioning.rs     # Download and provisioning pipeline
├── orbiq_auth.rs       # OAuth implementation
└── ...
```

#### Key Backend Modules

- **`commands.rs`**: Tauri invoke boundary - all frontend-callable functions
- **`domain.rs`**: Type-safe domain models with serde serialization
- **`storage.rs`**: Persistent state management with schema versioning
- **`services.rs`**: Shared utilities (normalization, process management)
- **`auth.rs`**: Microsoft OAuth flow and token management
- **`provisioning.rs`**: Manifest parsing, asset downloads, checksum validation

### Frontend Structure

The frontend is built with vanilla JavaScript for maximum performance:

```
src/web/
├── index.html          # Main application HTML
├── scripts/
│   ├── app.js          # Main application logic
│   └── vendor/         # Third-party libraries
├── styles/
│   ├── app.css         # Application styles
│   └── marketing.css   # Marketing page styles
└── assets/
    ├── banner/         # Instance banner images
    ├── instance-icons/ # Isometric block icons
    └── browse-logos/   # Mod platform logos
```

### Data Flow

```
┌─────────────┐
│   Frontend  │
│  (HTML/JS)  │
└──────┬──────┘
       │ Tauri Invoke
       ▼
┌─────────────┐
│  Commands   │ ◄─── API Boundary
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Domain    │ ◄─── Business Logic
│  Services   │
└──────┬──────┘
       │
       ▼
┌─────────────┐
│   Storage   │ ◄─── Persistence Layer
└─────────────┘
```

---

## 📁 Project Structure

```
Orbiq/
├── .github/
│   └── workflows/          # CI/CD workflows
│       ├── ci.yml          # Quality gates
│       └── post-release-monitor.yml
├── docs/                   # Documentation
│   ├── launcher-v1-plan.md
│   ├── orbiq-daily-driver-roadmap.md
│   ├── release-checklist-v1.md
│   ├── release-channel-policy.md
│   ├── post-release-monitoring.md
│   ├── orbiq-email-docker.md
│   └── THIRD_PARTY_ASSETS.md
├── scripts/                # Build and automation scripts
│   ├── build-web.js
│   ├── dev-web.js
│   ├── smoke-browse-runtime.js
│   ├── smoke-loaders.js
│   ├── smoke-install-matrix.js
│   ├── check-rollback-readiness.js
│   └── post-release-monitor.js
├── src/                    # Frontend source
│   └── web/
│       ├── index.html
│       ├── scripts/
│       └── styles/
├── src-tauri/              # Backend source (Rust)
│   ├── src/
│   ├── Cargo.toml
│   └── tauri.conf.json
├── dist/                   # Built web assets
├── reports/                # Monitoring reports
├── banner/                 # Banner assets
├── .env.example            # Environment template
├── .gitignore
├── CHANGELOG.md            # Version history
├── License.md
├── package.json
└── README.md
```

---

## 📝 Commands Reference

### Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev:web` | Start web development server |
| `npm run build:web` | Build web assets |
| `npm run tauri:dev` | Start Tauri development mode |
| `npm run tauri:build` | Build production application |

### Testing Commands

| Command | Description |
|---------|-------------|
| `npm run test:backend` | Run Rust backend tests |
| `npm run test:smoke` | Run smoke tests |
| `npm run test:browse` | Test browse runtime |
| `npm run test:loaders` | Test mod loaders |
| `npm run test:install-matrix` | Test installation matrix |

### Release Commands

| Command | Description |
|---------|-------------|
| `npm run release:rollback-check` | Check rollback readiness |
| `npm run monitor:post-release` | Monitor post-release metrics |

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file based on `.env.example`:

```env
# Microsoft OAuth Configuration
MICROSOFT_CLIENT_ID=your_client_id_here
MICROSOFT_TENANT_ID=common

# Application Settings
LOG_LEVEL=info
DATA_DIR=./data
```

### Tauri Configuration

Main configuration is in [`src-tauri/tauri.conf.json`](src-tauri/tauri.conf.json):

- **App Identifier**: Unique application ID
- **Window Settings**: Default window size, title, decorations
- **Bundle Settings**: Installer configuration
- **Security**: CSP policies, allowed APIs

---

## 📚 Documentation

Comprehensive documentation is available in the [`docs/`](docs/) directory:

- **[Launcher V1 Plan](docs/launcher-v1-plan.md)**: Original V1 execution plan and milestones
- **[Daily Driver Roadmap](docs/orbiq-daily-driver-roadmap.md)**: 4-week roadmap to production stability
- **[Release Checklist](docs/release-checklist-v1.md)**: Pre-release validation checklist
- **[Release Channel Policy](docs/release-channel-policy.md)**: Alpha/Beta/Stable release strategy
- **[Post-Release Monitoring](docs/post-release-monitoring.md)**: Monitoring and metrics guide
- **[Third-Party Assets](docs/THIRD_PARTY_ASSETS.md)**: Attribution for third-party resources

---

## 🗺️ Roadmap

### ✅ Completed (V1.0)

- [x] Layered backend architecture
- [x] Persistent state with schema versioning
- [x] Instance lifecycle management
- [x] Microsoft OAuth authentication
- [x] Provisioning pipeline with checksums
- [x] Java runtime detection
- [x] Preflight validation system
- [x] Diagnostics and debug export
- [x] CI/CD quality gates
- [x] Windows MSI/NSIS installers

### 🚧 In Progress

- [ ] Enhanced mod browser integration
- [ ] Automatic Java installation
- [ ] Mod update notifications
- [ ] Instance import/export

### 🔮 Future Plans (V2.0+)

- [ ] macOS and Linux support
- [ ] CurseForge integration
- [ ] Modrinth integration
- [ ] Modpack creation tools
- [ ] Cloud sync for instances
- [ ] Multiplayer server browser
- [ ] Resource pack manager
- [ ] Shader pack manager
- [ ] Performance profiling tools

---

## 🐛 Troubleshooting

### Common Issues

#### Launcher Won't Start

1. Check if Java is installed: `java -version`
2. Verify system requirements are met
3. Check logs in `%APPDATA%/Orbiq/logs/`
4. Try running as administrator

#### Instance Launch Fails

1. Open Diagnostics modal (click error toast)
2. Review preflight issues
3. Click "Fix Now" for automatic resolution
4. Export debug bundle if issue persists

#### Authentication Issues

1. Ensure system clock is correct (OAuth requires accurate time)
2. Try logging out and back in
3. Check internet connection
4. Clear token cache: Settings → Accounts → Relink Account

#### Download Failures

1. Check internet connection
2. Verify firewall isn't blocking downloads
3. Try again (downloads are resumable)
4. Check available disk space

### Debug Mode

Enable debug logging by setting environment variable:
```bash
set RUST_LOG=debug
```

### Getting Help

- **Issues**: [GitHub Issues](https://github.com/CubiqTeam/Orbiq/issues)
- **Discussions**: [GitHub Discussions](https://github.com/CubiqTeam/Orbiq/discussions)
- **Discord**: [Join our community](#) *(coming soon)*

---

## 🤝 Contributing

We welcome contributions! Here's how you can help:

### Ways to Contribute

- 🐛 **Report Bugs**: Open an issue with detailed reproduction steps
- 💡 **Suggest Features**: Share your ideas in discussions
- 📝 **Improve Documentation**: Fix typos, add examples, clarify instructions
- 🔧 **Submit Pull Requests**: Fix bugs or implement features

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
   - Follow existing code style
   - Add tests for new features
   - Update documentation
4. **Commit your changes**
   ```bash
   git commit -m "Add amazing feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Code Style

- **Rust**: Follow `rustfmt` formatting
- **JavaScript**: Use consistent indentation and naming
- **Commits**: Use conventional commit messages

### Testing Requirements

All PRs must:
- Pass existing tests
- Include tests for new features
- Pass CI quality gates

---

## 📄 License

This project is licensed under the ISC License - see the [License.md](License.md) file for details.

---

## 🙏 Acknowledgments

### Third-Party Assets

- **Isometric Block Icons**: Licensed under CC-BY-NC-SA-4.0 (see [ATTRIBUTION](src/web/assets/instance-icons/isometric-256/ATTRIBUTION.txt))
- **skinview3d**: 3D Minecraft skin viewer library
- **Tauri**: Cross-platform desktop framework
- **Rust Community**: For excellent tooling and libraries

### Special Thanks

- The Minecraft community for inspiration
- All contributors and testers
- Open source projects that made this possible

---

## 📞 Contact

- **GitHub**: [@CubiqTeam](https://github.com/CubiqTeam)
- **Repository**: [Orbiq](https://github.com/CubiqTeam/Orbiq)
- **Issues**: [Report a bug](https://github.com/CubiqTeam/Orbiq/issues/new)

---

<div align="center">

**Made with ❤️ by the Cubiq Team**

[⬆ Back to Top](#-orbiq-minecraft-launcher)

</div>
