import Search from '../pages/Search'
import MyInfo from '../pages/MyInfo'
import Profile from '../pages/Profile'
import Authenticate from '../pages/Authenticate'

const Navigation = [
    {
        id: 1,
        name: 'Search',
        path: '/search',
        component: Search
    }, {
        id: 2,
        name: 'Profile',
        path: '/profile',
        component: Profile
    }, {
        id: 3,
        name: 'Login',
        path: '/login',
        component: Authenticate,
    }, {
        id: 4,
        name: 'Register',
        path: '/register',
        component: Authenticate
    },
]

export default Navigation