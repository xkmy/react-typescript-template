import { defineConfig } from 'vite'
import * as path from 'path'
import reactRefresh from '@vitejs/plugin-react-refresh'
import theme from './webpack-config/common/theme'

export default defineConfig({
  server: {
    host: '0.0.0.0'
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        modifyVars: theme
      }
    }
  },
  define: {
    'process.IS_DEV': "'true'"
  },
  resolve: {
    alias: {
      '@common': path.resolve(__dirname, './src/assets/css/common'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@views': path.resolve(__dirname, './src/views'),
      '@store': path.resolve(__dirname, './src/store'),
      '@services': path.resolve(__dirname, './src/services'),
      '@components': path.resolve(__dirname, './src/components'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@hooks': path.resolve(__dirname, './src/hooks'),
      '@typings': path.resolve(__dirname, './src/typings'),
      '@css': path.resolve(__dirname, './src/assets/css/view'),
      '@constants': path.resolve(__dirname, './src/constants'),
      '@router': path.resolve(__dirname, './src/router')
    }
  },
  plugins: [reactRefresh()]
})
