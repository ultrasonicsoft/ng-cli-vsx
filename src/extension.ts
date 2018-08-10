'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

let terminal = vscode.window.createTerminal('angular-cli');

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

    // Use the console to output diagnostic information (console.log) and errors (console.error)
    // This line of code will only be executed once when your extension is activated
    console.log('Congratulations, your extension "ng-cli" is now active!');

    // The command has been defined in the package.json file
    // Now provide the implementation of the command with  registerCommand
    // The commandId parameter must match the command field in package.json
    let disposable = vscode.commands.registerCommand('extension.ngcli', () => {
        // The code you place here will be executed every time your command is executed

        // The code you place here will be executed every time your command is executed

        let editor = vscode.window.activeTextEditor;
        if (!editor) {
            return; // No open text editor
        }

        let selection = editor.selection;
        let text = editor.document.getText(selection);

        terminal.show();
        terminal.sendText(text);

        vscode.commands.executeCommand('editor.action.deleteLines');

        setTimeout(() => {
            vscode.commands.executeCommand('workbench.action.focusActiveEditorGroup');

        }, 1000);
        // Display a message box to the user
        vscode.window.showInformationMessage('Running command: ' + text);
    });

    context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {
}