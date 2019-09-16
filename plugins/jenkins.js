const replace = require('replace-in-file');
const chalk = require('chalk');
const prompt = require('prompt');
const runExec = require('../common/run-exec');

exports.exec = async () => {
    runExec("cp ./template/init-demo/Jenkinsfile ./Jenkinsfile")
    runExec("mkdir -p ./docker")
    runExec("cp ./template/init-demo/Dockerfile ./docker/Dockerfile")
    getUrlFromInput((url, image_name)=>generateJenkinsFileFor(url,image_name))
}

async function generateJenkinsFileFor(url,image_name) {
    const options = {
        files: './Jenkinsfile',
        from: [/github_url/g, /image_name/g],
        to: [url, image_name],
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
    prompt.get(['github_url','image_name'], function (err, result) {
        if (err) {
            console.error(chalk.green(err));
        }else {
            console.log("result",result);
            callback(`'${result.github_url}'`,`'${result.image_name}'`);
        }
    });
}