const cli = require('cac')();
const gitHooksPlugin = require('../plugins/git-hooks.js');

cli
	.command('add <feature>', 'Add feature')
	.action(feature => {
		if (feature === 'gitHook') {
			gitHooksPlugin.add();
		}
	});

cli.parse();
