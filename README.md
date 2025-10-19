# Effective AI Kit

A developer-focused VS Code extension for managing, sharing, and syncing AI chat modes, prompt configurations, and agent instructions. Designed for teams building with AI, this extension streamlines prompt engineering workflows and enables consistent, reusable AI behavior across environments.

## Features

### 🤖 Chat Modes
Pre-configured AI chat personalities tailored for specific roles:
- **Azure Architect**: Specialized guidance for Azure cloud architecture and best practices
- **Principal Software Engineer**: Expert-level software engineering assistance

### 💡 Prompt Files (9 Templates)
Reusable prompt templates accessible via `/` in GitHub Copilot Chat:

**Azure & Cloud:**
- `/az-cost-optimize` - Optimize Azure costs and resources
- `/azure-resource-health-diagnose` - Diagnose Azure resource health issues

**Development & Architecture:**
- `/boost-prompt` - Boost and improve prompt quality
- `/breakdown-feature-implementation` - Break down features into tasks
- `/containerize-aspnet-framework` - Containerize ASP.NET Framework apps
- `/dotnet-design-pattern-review` - Analyze and review .NET design patterns

**Documentation:**
- `/create-agentsmd` - Create agents.md documentation
- `/create-readme` - Generate comprehensive README documentation

**Version Control:**
- `/git-flow-branch-creator` - Create Git Flow branches

### 📋 Chat Instructions (14 Instruction Sets)
Automatically referenced instructions that enhance your AI interactions:

**Programming Languages:**
- **Angular**: Framework best practices and guidelines
- **Blazor**: Development guidelines and best practices
- **C#**: Programming language best practices
- **Go**: Programming language best practices
- **Java**: Programming language best practices
- **Rust**: Programming language best practices

**Infrastructure & DevOps:**
- **Ansible**: Automation and configuration management
- **Azure DevOps Pipelines**: CI/CD pipeline best practices
- **Docker**: Containerization best practices
- **Terraform**: Infrastructure as code best practices
- **Terraform Azure**: Azure-specific IaC best practices

**Architecture & General:**
- **.NET Architecture**: Design and architecture best practices
- **Memory Bank**: Context management across chat sessions
- **Performance Optimization**: Performance-focused guidance

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for "Effective AI Kit"
4. Click Install

## Usage

### Using Chat Modes
1. Open GitHub Copilot Chat
2. Select a chat mode from the available options:
   - `@azure-architect` for Azure-specific guidance
   - `@principal-software-engineer` for software engineering expertise

### Using Prompt Files
Prompts can be accessed directly in GitHub Copilot Chat using the `/` command:
1. Open GitHub Copilot Chat
2. Type `/` to see all available prompts
3. Select from 9 available prompts including:
   - `/create-readme` - Generate comprehensive README documentation
   - `/dotnet-design-pattern-review` - Analyze and review .NET design patterns
   - `/az-cost-optimize` - Optimize Azure costs
   - `/breakdown-feature-implementation` - Break down features into tasks
   - And 5 more specialized prompts

### Using Chat Instructions
Chat instructions are **automatically referenced** by GitHub Copilot Chat and enhance your AI interactions with persistent context and specialized behaviors across 14 different domains including programming languages, infrastructure, DevOps, and architecture.

No additional configuration needed - these instructions work in the background to improve your AI assistance experience based on your current context.

## Requirements

- Visual Studio Code version 1.105.0 or higher
- GitHub Copilot extension (for chat mode functionality)

## Extension Settings

This extension contributes the following chat modes, prompts, and instructions that integrate seamlessly with GitHub Copilot Chat.

## Known Issues

Please report any issues on the [GitHub repository](https://github.com/YoavLax/Effective-AI-KIT/issues).

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request on [GitHub](https://github.com/YoavLax/Effective-AI-KIT).

## License

MIT License - See LICENSE file for details.

## Feedback

Have suggestions or found a bug? Please [open an issue](https://github.com/YoavLax/Effective-AI-KIT/issues).

**Enjoy building with AI!**
