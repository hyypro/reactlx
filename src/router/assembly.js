import Loadable from '@@/Loadable'

const Home = Loadable(() => import('@/pages/home'))
const Login = Loadable(() => import('@/pages/login'))
const Chart = Loadable(() => import('@/pages/chart'))
const Sample = Loadable(() => import('@/pages/sample'))
const Form = Loadable(() => import('@/pages/form'))
const Table = Loadable(() => import('@/pages/table'))

export {
  Home,
  Login,
  Chart,
  Sample,
  Form,
  Table
}
