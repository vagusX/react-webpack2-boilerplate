const path = require('path')
const ora = require('ora')
const cliSpinners = require('cli-spinners')
const chalk = require('chalk')
const webpack = require('webpack')
const rimraf = require('rimraf')
const config = require('../config')
const pkg = require('../package.json')

const webpackConfig = require(`./webpack.prod.conf`)

const compiler = webpack(webpackConfig)

const spinner = ora({
  color: 'green',
  text: ` Building for production...`,
  spinner: cliSpinners.monkey
})

spinner.start()

rimraf(config.distDir, err => {
  if (err) throw err

  compiler.run((err, stats) => {
    if (err) {
      throw err
      spinner.fail(chalk.red(`Build failed for Project ${pkg.name}.\n`))
    }
    spinner.succeed(chalk.green(`Build complete for Project ${pkg.name}.\n`))
    process.stdout.write(statsOutput(stats) + '\n\n')
  })
})

function statsOutput(stats) {
  return stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  })
}
