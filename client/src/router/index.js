import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard/index.vue'
import Login from '../views/Login/index.vue'
import User from '../views/User.vue'
import Register from '../views/Register.vue'
import SendMail from '../views/SendMail.vue'
import QQLogin from '../views/QQLogin.vue'
import DecisionTree from '../views/DecisionTree/index'
import Table from '../views/Table/index'
import Tab from '../views/Tab/index'
import Rank from '../views/Rank/index'
import File from '../views/File'

import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式


import {Massage, Message} from 'element-ui'
import store from "../store";
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
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'user',
                name: 'User',
                component: User
            },
            {
                path: 'map',
                name: 'Map',
                component: Map
            },
            {
                path: 'mail',
                name: 'Mail',
                component: SendMail
            },
            {
                path: 'decisiontree',
                name: 'DecisionTree',
                component: DecisionTree
            },
            {
                path: 'table',
                name: 'Table',
                component: Table
            },
            {
                path: 'tab',
                name: 'Tab',
                component: Tab
            },
            {
                path: 'rank',
                name: 'Rank',
                component: Rank
            },{
                path: 'file',
                name: 'File',
                component: File
            }
        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/qqlogin',
        name: 'QQlogin',
        component: QQLogin,
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
const whiteList = ['/login'] // 不重定向白名单
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    NProgress.start()
    // let token = JSON.parse(localStorage.getItem('user'));
    // console.log(token)
    // if (token) {
    //     if (to.path === '/login') {
    //         next({path:'/home'});
    //         NProgress.done()
    //     }
    //     else{
    //         next()
    //     }
    // }else{
    //     if (whiteList.indexOf(to.path) !== -1) {
    //         next()
    //     } else {
    //         Message.error({massage:"你尚未登录！"})
    //
    //         next('/login')
    //         NProgress.done()
    //     }
    // }


    if (to.path === '/login') {
        next();
    } else {
        let token = JSON.parse(localStorage.getItem('user'));
        if (token === 'null' || token === '') {
            if (whiteList.indexOf(to.path) !== -1) {
                next()
            } else {

                //  Message.error({message: success.data.msg})
                Message.error({massage: "你尚未登录！"})
                setTimeout(function () {
                    next('/login');
                }, 6000)
            }

        } else {
            next();
        }
    }
});


router.afterEach(() => {
    NProgress.done() // 结束Progress
})

export default router;
