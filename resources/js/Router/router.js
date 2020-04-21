import Vue from 'vue'
import VueRouter from 'vue-router'



Vue.use(VueRouter)

import Login from '../components/login/Login'
import Logout from '../components/login/Logout'
import SignUp from '../components/login/signup'
import CreateCategory from '../components/category/CreateCategory'
import Forum from '../components/forum/Forum'
import Read from '../components/forum/read'
import Create from '../components/forum/create'

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
        name: 'Forum',
        component: Forum
    },
    {
        path: '/question/:slug',
        name: 'read',
        component: Read
    },
    {
        path: '/ask',
        component: Create
    },
    {
        path: '/category',
        name: 'category',
        component: CreateCategory
    },

]

const router = new VueRouter({
    routes, // short for `routes: routes`
    hashbang: false,
    mode: 'history'
})


export default router
