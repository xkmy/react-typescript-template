import React from 'react'
import { Switch, Route } from 'react-router-dom'

export type RouterComponent = {
  routes?: IRoute[]
}

export interface IRoute {
  path: string
  key?: string
  exact?: boolean
  strict?: boolean
  component: React.ComponentType<RouterComponent>
  children?: IRoute[]
}

export const renderRoutes = (routes: IRoute[], extraProps = {}, switchProps = {}) =>
  routes ? (
    <Switch {...switchProps}>
      {routes.map(route => (
        <Route
          {...extraProps}
          key={route.key || route.path}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => <route.component {...props} {...extraProps} routes={route.children} />}
        />
      ))}
    </Switch>
  ) : null
