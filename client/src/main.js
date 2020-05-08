import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import vuetify from "./plugins/vuetify"
import moment from "moment";
import './plugins/base'
import './mock'

import md5 from 'js-md5'

import {postRequest} from "./api/api";
import {postKeyValueRequest} from "./api/api";
import {putRequest} from "./api/api";
import {deleteRequest} from "./api/api";
import {getRequest} from "./api/api";

import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;
Vue.prototype.Md5=md5;

Vue.config.productionTip = true

//时间过滤器
Vue.filter('dateF', function (patter) {
    return moment().format('YYYY-MM-DD HH:mm:ss')
})
let vm = new Vue({
        router,
        store,
        vuetify,
        render: h => h(App)
    }).$mount('#app')

