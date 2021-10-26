const glob = require('glob')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')

const setEntry = () => {
  const entry = {}
  const HtmlWebpackPlugins = []

  const rootPath = '../../src/pages/*/*.tsx'
  const entryFiles = glob.sync(path.join(__dirname, rootPath))

  Object.keys(entryFiles).forEach(i => {
    const entryFile = entryFiles[i]
    const match = entryFile.match(/src\/pages\/(.*)\/(.*)\.tsx/)
    const pageName = match && match[1]
    entry[pageName] = entryFile

    HtmlWebpackPlugins.push(
      new HtmlWebpackPlugin({
        template: resolve(`src/pages/${pageName}/${pageName}.html`),
        filename: `${pageName}.html`,
        chunks: [pageName, 'core', 'antd', 'common', 'vendor'],
        inject: true,
        minify: {
          html5: true,
          collapseWhitespace: true,
          preserveLineBreaks: false,
          minifyCSS: true,
          minifyJS: true,
          removeComments: false
        }
      })
    )
  })

  return {
    entry,
    HtmlWebpackPlugins
  }
}

const { entry, HtmlWebpackPlugins } = setEntry()

module.exports = {
  entry,
  HtmlWebpackPlugins
}
