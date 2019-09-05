const npmInstaller = require('../common/npm-installer')
exports.exec = ()=>{
    npmInstaller.devInstall("husky")
}