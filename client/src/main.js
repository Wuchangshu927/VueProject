import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import vuetify from "./plugins/vuetify"
import moment from "moment";


import {postRequest} from "./utils/api";
import {postKeyValueRequest} from "./utils/api";
import {putRequest} from "./utils/api";
import {deleteRequest} from "./utils/api";
import {getRequest} from "./utils/api";
import 'element-ui/lib/theme-chalk/index.css';
Vue.prototype.postRequest = postRequest;
Vue.prototype.postKeyValueRequest = postKeyValueRequest;
Vue.prototype.putRequest = putRequest;
Vue.prototype.deleteRequest = deleteRequest;
Vue.prototype.getRequest = getRequest;











Vue.config.productionTip = false









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

