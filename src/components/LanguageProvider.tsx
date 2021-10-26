import React from 'react'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import 'dayjs/locale/zh-cn'
import dayjs from 'moment'
dayjs.locale('zh-cn')

const LanguageProvider: React.FC = props => {
  return <ConfigProvider locale={zhCN}>{props.children}</ConfigProvider>
}

export default LanguageProvider
