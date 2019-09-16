const chalk = require('chalk')
const npmInstaller = require('../common/npm-installer')
const runExec = require('../common/run-exec')

exports.exec = ()=>{
    const mochaTemplatePath= path.resolve(__dirname,'../template/init-demo/mocha.js');
    npmInstaller.devInstall("mocha")
    runExec("mkdir -p ./test")
    runExec(`cp ${mochaTemplatePath} ./test/test.js`)
    runExec("./node_modules/mocha/bin/mocha").then(result=>{
        console.log(chalk.green(result))
    });
}