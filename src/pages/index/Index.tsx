import React from 'react'
import ReactDom from 'react-dom'
import { HashRouter } from 'react-router-dom'
import routes from '../../router/routes'
import { renderRoutes } from '../../router/routerConfig'
import LanguageProvider from '@components/LanguageProvider'
import '../../assets/css/common/common.scss'

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <HashRouter>{renderRoutes(routes)}</HashRouter>
    </LanguageProvider>
  )
}

ReactDom.render(<App />, document.getElementById('root'))
