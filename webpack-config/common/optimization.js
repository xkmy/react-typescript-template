
module.exports = {
  // 提取公用包
  splitChunks: {
    cacheGroups: {
      default: false,
      vendors: false,
      core: {
        test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
        name: 'core',
        priority: 30,
        enforce: true, // 忽略minSize,minChunks,maxAsyncRequests,maxInitialRequests等选项
        chunks: 'initial'
      },
      antd: {
        test: /[\\/]node_modules[\\/](antd|@ant-design)[\\/]/,
        name: 'antd',
        priority: 20,
        enforce: true,
        chunks: 'initial'
      },
      vendor: {
        test: /[\\/]node_modules[\\/]/,
        chunks: 'initial',
        enforce: true,
        priority: 10,
        name: 'vendor'
      },
      common: {
        chunks: 'all',
        minChunks: 2,
        enforce: true,
        priority: 5,
        name: 'common'
      }
    }
  },
  minimize: true,
}
