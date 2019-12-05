#!/usr/bin/env node

const fs = require('fs')
const signale = require('signale')
const ora = require('ora')
const nodeHtmlToImage = require('node-html-to-image')

const pkg = require('../package.json')

require('yargs')
  .command('$0 [html] [output]', 'start the server',(yargs) => {
    yargs
      .positional('html', {
        describe: 'path to a html file',
      })
      .positional('output', {
        describe: 'path where image should be created',
      })
      .option('type', {
        alias: 't',
        type: 'string',
        default: 'png',
        description: 'type of image that should be generated'
      })
  }, (argv) => {
    signale.start(`node-html-to-image-cli v${pkg.version}`)
    if (!fs.existsSync(argv.html)) return signale.error('Please provide an existing HTML file path as first parameter.')
    if (!argv.output) return signale.error('Please provide an output path as second paramter.')
    if (!['png', 'jpeg'].includes(argv.type)) return signale.error('The type option should be valued to "png" or "jpeg".')

    const spinner = ora('Getting HTML content').start()
    const html = fs.readFileSync(argv.html).toString('utf8')
    spinner.text = 'Generating image from HTML'
    nodeHtmlToImage({
      html,
      output: argv.output,
      type: argv.type,
    })
      .then(() => {
        spinner.stop()
        signale.success('Image successfully created!')
      })
      .catch(e => signale.error(e))
  })
  .argv
