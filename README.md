## 介绍

使用 webpack5.0 (最近更新了 vite 进行开发环境编译,打包还是走的 webpack) 搭建的 react+typescript 项目(支持多页应用)

## 启动项目

提供两种方式启动

### 使用 webpack

1.yarn install (or npm install)
2.yarn start (or npm run dev)

### 使用 vite (更快)

yarn dev or npm run dev

## 打包

yarn build or npm run build

## 跨域

1.如果使用 webpack 启动项目可自行 在 webpack.dev.js 里配置 devServer 的 proxy 来进行跨域 2.如果使用 vite 启动项目可在 <font color=#0099ff>vite.config.js</font>的 server 里配置 proxy
