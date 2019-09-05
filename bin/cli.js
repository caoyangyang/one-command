#!/usr/bin/env node
const chalk = require('chalk')
const cli = require('cac')();
const gitHooksPlugin = require('../plugins/git-hooks.js');
const nodeVersionPlugin = require('../plugins/node-version.js');

const pluginList={
    gitHook:gitHooksPlugin,
	nodeVersion:nodeVersionPlugin
}
cli
	.command('add <feature>', 'Add feature')
	.action(feature => {
        pluginList[`${feature}`].exec()
	});

cli
    .command('ls', 'Show all feature plugin')
    .action(() => {
        console.info(chalk.green(Object.keys(pluginList)))
    });

cli.help()
cli.version('0.0.0')

cli.parse();
