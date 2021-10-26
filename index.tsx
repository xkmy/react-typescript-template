// vite开发环境直接完整引入antd样式,打包会按需打包
import 'antd/dist/antd.less'

// 单页应用直接引入
import './src/pages/index/Index'

// 如果是多页需要在package.json 里配置多入口,并在此动态引入
