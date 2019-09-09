const runExec = require('../common/run-exec')
exports.exec = ()=>{
    runExec(`node -v > .nvmrc`)
}