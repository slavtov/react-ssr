import NotFound from './components/NotFound'
import Home from './pages/Home'
import Users from './pages/Users'
import { fetchUsers } from './redux/actions/users'

export default [
    {
        component: Home,
        path: '/',
        exact: true
    },
    {
        component: Users,
        path: '/users',
        loadData: store => store.dispatch(fetchUsers())
    },
    {
        component: NotFound
    }
]