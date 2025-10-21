import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('Congratulations, your extension "effective-ai-kit" is now active!');

	const disposable = vscode.commands.registerCommand('effective-ai-kit.showInfo', () => {
		vscode.window.showInformationMessage('Hello from Effective AI Kit!');
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}