import { IRoute } from './routerConfig'
import Home from '../views/Home/Home'

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Home
  }
]

export default routes
