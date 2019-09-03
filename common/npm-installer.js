const runExec = require('./run-exec')
exports.install = (packageName)=>{
    runExec("",`npm i ${packageName} --save`)
}