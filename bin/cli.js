#!/usr/bin/env node
const chalk = require('chalk')
const cli = require('cac')();
const gitHooksPlugin = require('../plugins/git-hooks.js');
const nodeVersionPlugin = require('../plugins/node-version.js');
const esLintPlugin = require('../plugins/es-lint.js');
const mochaPlugin = require('../plugins/mocha.js');
const jenkinsPlugin = require('../plugins/jenkins.js');

const pluginList={
    gitHook:gitHooksPlugin,
	nodeVersion:nodeVersionPlugin,
    esLint: esLintPlugin,
    mocha: mochaPlugin,
    jenkins: jenkinsPlugin
}
cli
	.command('add <feature>', 'Add feature')
	.action(feature => {
        pluginList[`${feature}`].exec()
	});

cli
    .command('init <feature>', 'init feature help')
    .action(feature => {
        pluginList[`${feature}`].init()
    });

cli
    .command('ls', 'Show all feature plugin')
    .action(() => {
        console.info(chalk.green(Object.keys(pluginList)))
    });

cli.help()
cli.version('0.0.0')

cli.parse();
