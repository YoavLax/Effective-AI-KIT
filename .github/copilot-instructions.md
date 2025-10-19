# Effective AI Kit - Development Instructions

This document provides guidance for developers working on the Effective AI Kit extension.

## Project Structure

```
effective-ai-kit/
├── .vscode/              # VS Code workspace settings
├── images/               # Extension icon and assets
├── out/                  # Compiled JavaScript output
├── prompts/              # All prompt and instruction files
│   ├── *.prompt.md       # Prompt files (accessible via / in chat)
│   ├── *.chatmode.md     # Chat mode files
│   └── *.instructions.md # Instruction files (auto-referenced)
├── src/                  # TypeScript source code
│   ├── extension.ts      # Main extension entry point
│   └── test/             # Test files
├── CHANGELOG.md          # Version history
├── LICENSE               # MIT License
├── package.json          # Extension manifest
├── README.md             # User documentation
└── tsconfig.json         # TypeScript configuration
```

## File Types and Their Purpose

### 1. Prompt Files (`.prompt.md`)
- **Location**: `prompts/` directory
- **Purpose**: Reusable templates accessible in GitHub Copilot Chat via `/command`
- **Usage**: Users type `/` in chat to see and select these prompts
- **Registration**: Must be added to `package.json` under `contributes.chatPromptFiles`

**Example Entry in package.json:**
```json
{
  "name": "my-prompt",
  "description": "Description of what this prompt does",
  "path": "./prompts/my-prompt.prompt.md"
}
```

### 2. Chat Mode Files (`.chatmode.md`)
- **Location**: `prompts/` directory
- **Purpose**: Pre-configured AI personalities for specific roles
- **Usage**: Users select modes with `@mode-name` in chat
- **Registration**: Must be added to `package.json` under `contributes.chatModes`

**Example Entry in package.json:**
```json
{
  "name": "my-mode",
  "description": "Description of this mode",
  "path": "./prompts/my-mode.chatmode.md"
}
```

### 3. Instruction Files (`.instructions.md`)
- **Location**: `prompts/` directory
- **Purpose**: Automatically referenced context that enhances AI interactions
- **Usage**: Work in the background - no user action required
- **Registration**: Must be added to `package.json` under `contributes.chatInstructions`

**Example Entry in package.json:**
```json
{
  "name": "my-instructions",
  "description": "Description of these instructions",
  "path": "./prompts/my-instructions.instructions.md"
}
```

## Adding New Content

### Adding a New Prompt File

1. **Create the file** in `prompts/` directory:
   ```bash
   prompts/my-new-prompt.prompt.md
   ```

2. **Add frontmatter** (if needed for metadata):
   ```markdown
   ---
   mode: 'agent'
   description: 'Brief description'
   ---
   
   ## Your prompt content here
   ```

3. **Register in package.json**:
   ```json
   "chatPromptFiles": [
     {
       "name": "my-new-prompt",
       "description": "What this prompt does",
       "path": "./prompts/my-new-prompt.prompt.md"
     }
   ]
   ```

4. **Update README.md** to document the new prompt

5. **Update CHANGELOG.md** with the addition

### Adding a New Instruction File

1. **Create the file** in `prompts/` directory:
   ```bash
   prompts/my-technology.instructions.md
   ```

2. **Add frontmatter** (optional):
   ```markdown
   ---
   applyTo: '**/*.ext'
   description: 'Brief description'
   ---
   
   ## Your instructions here
   ```

3. **Register in package.json**:
   ```json
   "chatInstructions": [
     {
       "name": "my-technology",
       "description": "Technology-specific best practices",
       "path": "./prompts/my-technology.instructions.md"
     }
   ]
   ```

4. **Update README.md** to document the new instructions

5. **Update CHANGELOG.md** with the addition

## Development Workflow

### Prerequisites
- Node.js (v22.x or higher)
- Visual Studio Code (v1.105.0 or higher)
- Git

### Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YoavLax/Effective-AI-KIT.git
   cd Effective-AI-KIT
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Compile TypeScript**:
   ```bash
   npm run compile
   ```

### Development

1. **Watch mode** (auto-compile on changes):
   ```bash
   npm run watch
   ```

2. **Test the extension**:
   - Press `F5` in VS Code to launch Extension Development Host
   - Test your changes in the new window

3. **Lint your code**:
   ```bash
   npm run lint
   ```

### Testing

- **Run tests**:
  ```bash
  npm test
  ```

- **Test extension command**:
  - In Extension Development Host, press `Ctrl+Shift+P`
  - Type "Effective AI Kit"
  - Verify the info message appears

- **Test prompts**:
  - Open GitHub Copilot Chat
  - Type `/` to see your prompts
  - Select and test each one

## Publishing Workflow

### Version Bumping

1. **Update version** in `package.json`:
   ```json
   "version": "1.0.4"
   ```

2. **Update CHANGELOG.md** with changes:
   ```markdown
   ## [1.0.4] - 2025-XX-XX
   
   ### Added
   - New feature
   
   ### Changed
   - Modified behavior
   
   ### Fixed
   - Bug fix
   ```

3. **Commit changes**:
   ```bash
   git add .
   git commit -m "Bump version to 1.0.4"
   ```

### Publishing to Marketplace

1. **Install VSCE** (if not already installed):
   ```bash
   npm install -g @vscode/vsce
   ```

2. **Package the extension** (optional - for testing):
   ```bash
   vsce package
   ```
   This creates a `.vsix` file you can install locally

3. **Publish to marketplace**:
   ```bash
   vsce publish
   ```

4. **Push to GitHub**:
   ```bash
   git push origin master
   ```

## Naming Conventions

### File Names
- **Prompts**: `kebab-case-description.prompt.md`
- **Chat Modes**: `kebab-case-name.chatmode.md`
- **Instructions**: `kebab-case-technology.instructions.md`

### IDs in package.json
- Use `kebab-case` matching the filename (without extension)
- Example: `create-readme`, `azure-architect`, `performance-optimization`

### Descriptions
- Be concise and action-oriented
- Start with a verb for prompts: "Create...", "Generate...", "Analyze..."
- Use noun phrases for instructions: "Best practices for...", "Guidelines for..."

## Code Style

- **TypeScript**: Follow the existing ESLint configuration
- **Markdown**: Use proper heading hierarchy, lists, and code blocks
- **JSON**: 2-space indentation, no trailing commas

## Best Practices

### For Prompts
- Include clear instructions and examples
- Specify expected output format
- Consider edge cases
- Test with various inputs

### For Instructions
- Focus on best practices and patterns
- Include code examples where appropriate
- Reference authoritative sources
- Keep content up-to-date

### For Documentation
- Update README.md for user-facing changes
- Update CHANGELOG.md for every version
- Keep examples simple and clear
- Include screenshots when helpful

## Common Issues

### Issue: Prompts not appearing in chat
**Solution**: Verify the file is registered in `package.json` under `chatPromptFiles` and the path is correct.

### Issue: Compilation errors
**Solution**: Run `npm run compile` and check TypeScript errors. Ensure all types are correct.

### Issue: Publishing fails
**Solution**: 
- Verify publisher ID is correct in `package.json`
- Ensure you have a valid Personal Access Token
- Check version number is incremented

## Resources

- [VS Code Extension API](https://code.visualstudio.com/api)
- [Publishing Extensions](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)
- [Extension Manifest](https://code.visualstudio.com/api/references/extension-manifest)
- [GitHub Copilot Extensibility](https://code.visualstudio.com/api/extension-guides/chat)

## Support

- **Issues**: [GitHub Issues](https://github.com/YoavLax/Effective-AI-KIT/issues)
- **Discussions**: [GitHub Discussions](https://github.com/YoavLax/Effective-AI-KIT/discussions)
- **Marketplace**: [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=yoavlax.effective-ai-kit)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
