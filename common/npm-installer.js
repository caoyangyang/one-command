const runExec = require('./run-exec')
exports.devInstall = (packageName)=>{
    runExec(`npm i --save-dev ${packageName}`)
}