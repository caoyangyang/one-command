const exec = require('child_process').exec
const printError = require('./print-error')

module.exports = function (args, cmd) {
  if (args.dryRun) return Promise.resolve()
  return new Promise((resolve, reject) => {
    exec(cmd, function (err, stdout, stderr) {
      if (err) {
        printError(args, stderr || err.message)
        return reject(err)
      } else if (stderr) {
        printError(args, stderr, { level: 'warn', color: 'yellow' })
      }
      return resolve(stdout)
    })
  })
}
