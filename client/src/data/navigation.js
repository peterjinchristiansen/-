import Search from '../pages/Search'
import Groups from '../pages/Groups'
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
        name: 'Groups',
        path: '/mygroups',
        component: Groups
    }, {
        id: 3,
        name: 'Profile',
        path: '/profile',
        component: Profile
    }, {
        id: 4,
        name: 'Login',
        path: '/login',
        component: Authenticate,
    }, {
        id: 5,
        name: 'Register',
        path: '/register',
        component: Authenticate
    }
]

export default Navigation