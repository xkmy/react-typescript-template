const { resolve } = require('./utils')
const theme = require('./theme')

module.exports = [
  {
    test: /\.css$/,
    include: [resolve('src')],
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      }
    ]
  },
  {
    test: /\.scss$/,
    include: [resolve('src')],
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader'
      },
      {
        loader: 'sass-loader'
      }
    ]
  },
  {
    test: /\.less$/,
    use: [
      {
        loader: 'style-loader'
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
