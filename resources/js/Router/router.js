import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import SignUp from '../components/login/signup'
import Forum from '../components/forum/Forum'

const routes = [
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/logout',
        name: 'Logout',
        component: Logout
    },
    {
        path: '/signup',
        name: 'Sign Up',
        component: SignUp
    },
    {
        path: '/forum',
        name: 'forum',
        component: Forum
    }

]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})


export default router
