const npmInstaller = require('../common/npm-installer')
exports.add = ()=>{
    npmInstaller.devInstall("husky")
}