import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import View from '../views/View.vue'
import Login from '../views/Login.vue'
import User from '../views/User.vue'
import Register from '../views/Register.vue'
import {Massage, Message} from 'element-ui'
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
router.beforeEach()
//export default router


// import Vue from 'vue';
// import Router from 'vue-router';
// import login from '@/components/login';
// import home from '@/components/home';
// Vue.use(Router);
// const router = new Router(
//     {
//         routes: [
//             { path: '/', redirect: '/login' },
//             { path: '/login', name: 'login', component: login },
//             { path: '/home', name: 'home', component: home }
//             ]});
// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
    if (to.path === '/login') {
        next();
    } else {
        let token = JSON.parse(localStorage.getItem('user'));
        if (token === 'null' || token === '') {
          //  Message.error({message: success.data.msg})
            Message.error({massage:"你尚未登录！"})
            setTimeout(function () {
                next('/login');
            },6000)

        } else {
            next();
        }
    }
});
export default router;
