<h1 align="center">Welcome to node-html-to-image-cli 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.1.1-blue.svg?cacheSeconds=2592000" />
  <img src="https://img.shields.io/badge/node-%3E%3D10-blue.svg" />
  <a href="https://github.com/frinyvonnick/node-html-to-image-cli#readme" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
  <a href="https://github.com/frinyvonnick/node-html-to-image-cli/blob/master/LICENSE" target="_blank">
    <img alt="License: Apache--2.0" src="https://img.shields.io/badge/License-Apache--2.0-yellow.svg" />
  </a>
  <a href="https://twitter.com/yvonnickfrin" target="_blank">
    <img alt="Twitter: yvonnickfrin" src="https://img.shields.io/twitter/follow/yvonnickfrin.svg?style=social" />
  </a>
</p>

> A cli based on node-html-to-image that generates images from HTML

### 🏠 [Homepage](https://github.com/frinyvonnick/node-html-to-image-cli)

## Description

This is cli is based on [node-html-to-image](https://github.com/frinyvonnick/node-html-to-image). It generates an image from an HTML file. `node-html-to-image` provides more options and lets you pass down custom configuration to puppeteer which is used under the hood.

![node-html-to-image-cli's demo](https://raw.githubusercontent.com/frinyvonnick/node-html-to-image-cli/master/misc/demo.gif)

## Prerequisites

- node >=10

## Install

This step is uneccessary if you use npx.

```sh
yarn add global node-html-to-image-cli
# or
npm install -g node-html-to-image-cli
```

## Usage

Without handlebars template

```sh
npx node-html-to-image-cli examples/simple.html ./image.png
```

With file based json data passed to the template

```sh
npx node-html-to-image-cli examples/handlebars.html ./image.png --content ./examples/handlebars.json
```

With command line json data passed to the template

```sh
npx node-html-to-image-cli examples/handlebars.html ./image.png --json '{{"you":"yours"}}'
```

With selector

```sh
npx node-html-to-image-cli examples/simple.html ./image.png --selector 'h1'
```

### Arguments

| Argument | Description                        |
|----------|------------------------------------|
| html     | path to a html file                |
| output   | path where image should be created |

### Options

| Option    | Alias | Description                                     |
|-----------|-------|-------------------------------------------------|
| --type    | -t    | type of image that should be generated          |
| --transparent    | none    | determine if background of the generated image should be transparent           |
| --content | -c    | path to a content file with handlebars data     |
| --json    | -j    | json string with handlebars data                |
| --selector | -s    | string of selector to capture (default "body")  |


## Related

- [node-html-to-image](https://github.com/frinyvonnick/node-html-to-image) - API for this cli

## Author

👤 **FRIN Yvonnick <frin.yvonnick@gmail.com>**

* Website: [https://yvonnickfrin.dev](https://yvonnickfrin.dev)
* Twitter: [@yvonnickfrin](https://twitter.com/yvonnickfrin)
* Github: [@frinyvonnick](https://github.com/frinyvonnick)

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/frinyvonnick/node-html-to-image-cli/issues). 

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2019 [FRIN Yvonnick <frin.yvonnick@gmail.com>](https://github.com/frinyvonnick).<br />
This project is [Apache--2.0](https://github.com/frinyvonnick/node-html-to-image-cli/blob/master/LICENSE) licensed.

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
