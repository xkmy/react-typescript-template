const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const { entry, HtmlWebpackPlugins } = require('./common/entry')
const rules = require('./common/rules') 

module.exports = {
  entry,
  output: {
    path: path.join(__dirname, '../dist'),
    filename: 'js/[name]_[chunkhash:8].js'
  },
  module: {
    rules
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: path.join(__dirname, '../tsconfig.json')
      })
    ]
  },
  plugins: [
    // 将css提取成单独的文件
    new MiniCssExtractPlugin({
      filename: 'css/[name]_[contenthash:8].css'
    }),
    new ForkTsCheckerWebpackPlugin({
      async: false
    }),
    ...HtmlWebpackPlugins
  ],
  // 缓存生成的Webpack模块
  cache: {
    type: 'filesystem',
    buildDependencies: {
      config: [__filename]
    }
  },
}
