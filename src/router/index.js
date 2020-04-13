import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View from '../views/View.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Register from '../views/Register.vue'

Vue.use(VueRouter)

const routes = [
    {path: '/', redirect: '/login'},
    {
        path: '/home',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'view',
                name: 'View',
                component: View
            },
            {
                path: 'user',
                name: 'User',
                component: User
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    }
]

const router = new VueRouter({
    routes
})

export default router
