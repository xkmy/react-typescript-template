const { merge } = require('webpack-merge')
const webpack = require('webpack')
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const baseConfig = require('./webpack.base')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin') // 打包速度分析
const speedMeasurePlugin = new SpeedMeasurePlugin()
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin')

const optimization = require('./common/optimization')
const cssRules = require('./common/cssRulesProd')

const prodConfig = speedMeasurePlugin.wrap({
  mode: 'production',
  module: {
    rules: cssRules
  },
  plugins: [
    // 压缩css
    new OptimizeCssAssetsWebpackPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportTitle: 'bundle-analyzer-report',
      reportFilename: 'bundle-analyzer-report.html'
    }),
    new CleanWebpackPlugin(),
    new AntdDayjsWebpackPlugin(),
    new FriendlyErrorsWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.IS_DEV': JSON.stringify(false)
    })
  ],
  optimization,
  performance: {
    hints: false
  },
  stats: 'errors-only'
})

module.exports = merge(baseConfig, prodConfig)
