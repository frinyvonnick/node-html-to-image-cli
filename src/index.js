#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
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
      .option('transparent', {
        type: 'boolean',
        default: false,
        description: 'determine if background of the generated image should be transparent'
      })
      .option('json', {
        alias: 'j',
        type: 'string',
        describe: 'json string with the content',
      })
      .option('content', {
        alias: 'c',
        type: 'string',
        describe: 'path to a json file with the content',
      })
      .option('selector', {
        alias: 's',
        type: 'string',
        describe: 'selector of element to capture (default "body")',
      })
  }, (argv) => {
    signale.start(`node-html-to-image-cli v${pkg.version}`)
    if (!fs.existsSync(argv.html)) return signale.error('Please provide an existing HTML file path as first parameter.')
    if (!argv.output) return signale.error('Please provide an output path as second paramter.')
    if (!['png', 'jpeg'].includes(argv.type)) return signale.error('The type option should be valued to "png" or "jpeg".')

    let content
    if (argv.content) {
      try {
        content = require(path.resolve(argv.content))
      } catch (e) {
        if(e.code === 'MODULE_NOT_FOUND'){
          return signale.error(`Could not find data file ${argv.content}`)
        }
      }
    } else if (argv.json) {
      try {
        content = JSON.parse(argv.json);
      } catch (e) {
        return signale.error(`Could not parse json ${argv.json}`)
      }
    }
    const spinner = ora('Getting HTML content').start()
    const html = fs.readFileSync(argv.html).toString('utf8')
    spinner.text = 'Generating image from HTML'
    nodeHtmlToImage({
      html,
      output: argv.output,
      content,
      type: argv.type,
      transparent: argv.transparent,
      selector: argv.selector,
    })
      .then(() => {
        spinner.stop()
        signale.success('Image successfully created!')
      })
      .catch(e => signale.error(e))
  })
  .argv
