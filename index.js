const gitHooksPlugin = require('./plugins/git-hooks.js')

exports.addGitHooks = function () {
    gitHooksPlugin.add()
};




