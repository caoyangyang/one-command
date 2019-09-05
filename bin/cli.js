#!/usr/bin/env node
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

cli.parse();
