const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const webpack = require('webpack')
const path = require('path')
const { merge } = require('webpack-merge')
const baseConfig = require('./webpack.base')
const cssRules = require('./common/cssRules')

const port = 8000

const devConfig = {
  mode: 'development',
  module: {
    rules: cssRules
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.IS_DEV': JSON.stringify(true)
    }),
    new FriendlyErrorsWebpackPlugin({
      compilationSuccessInfo: {
        messages: [`App runing at:`, `Local: http://localhost:${port}`],
        notes: []
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    port,
    host: '0.0.0.0',
    openPage: `http://localhost:${port}`,
    stats: 'errors-only',
    disableHostCheck: true,
    progress: true,
    inline: true,
    hot: true,
    // 可进行跨域配置
    proxy: {}
  },
  devtool: 'inline-source-map',
  target: 'web'
}

module.exports = merge(baseConfig, devConfig)
