module.exports = [
  {
    oneOf: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node-modules/,
        loader: 'babel-loader',
        options: {
          // 开启babel缓存
          cacheDirectory: true
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'imgs/[name]_[hash:8][ext]',
              fallback: 'file-loader?name=imgs/[name]_[hash:8][ext]'
            }
          }
        ]
      }
    ]
  }
]
