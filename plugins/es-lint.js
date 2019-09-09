const chalk = require('chalk')
const npmInstaller = require('../common/npm-installer')
exports.exec = () => {
    npmInstaller.devInstall("eslint")

}

exports.init = () => {
    console.log("init eslint, please try run")
    console.log(chalk.green("./node_modules/.bin/eslint --init"))
}