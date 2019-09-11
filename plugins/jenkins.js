const replace = require('replace-in-file');
const chalk = require('chalk');
const prompt = require('prompt');
const runExec = require('../common/run-exec');

exports.exec = async () => {
    runExec("cp ./template/init-demo/Jenkinsfile ./Jenkinsfile")
    getUrlFromInput((url)=>generateJenkinsFileFor(url))
}

async function generateJenkinsFileFor(url) {
    const options = {
        files: './Jenkinsfile',
        from: /github_url/g,
        to: url ,
    };

    try {
        const results = replace.sync(options)
        console.log(chalk.green('Replacement results:'),results);
    }
    catch (error) {
        console.error(chalk.red('Error occurred:', error));
    }
}

function getUrlFromInput(callback){
    prompt.start();
    prompt.get(['github_url'], function (err, result) {
        if (err) {
            console.error(chalk.green(err));
        }else {
            callback(`'${result.github_url}'`);
        }
    });
}