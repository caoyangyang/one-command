const chalk = require('chalk')
const npmInstaller = require('../common/npm-installer')
const runExec = require('../common/run-exec')

exports.exec = ()=>{
    npmInstaller.devInstall("mocha")
    runExec("mkdir -p ./test")
    runExec("cp ./101/mocha.js ./test/test.js")
    runExec("cp ./101/mocha.js ./test/test.js")
    runExec("./node_modules/mocha/bin/mocha").then(result=>{
        console.log(chalk.green(result))
    });
}