const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('./utils')

const theme = require('./theme')

module.exports = [
  {
    test: /\.css$/,
    use: [
      // 将css提取成单独的文件
      MiniCssExtractPlugin.loader,
      'css-loader'
    ]
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: MiniCssExtractPlugin.loader
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'less-loader',
        options: {
          lessOptions: {
            modifyVars: theme,
            javascriptEnabled: true
          }
        }
      }
    ]
  }
]
