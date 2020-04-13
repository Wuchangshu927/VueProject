import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from "./plugins/vuetify"
import moment from "moment";

Vue.config.productionTip = false

import axios from "axios"

let token = '';
axios.defaults.withCredentials = false;
axios.defaults.headers.common['token'] = token;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';//配置请求头
axios.defaults.baseURL = 'http://127.0.0.1:3000';
Vue.prototype.$axios = axios
Vue.filter('dateF', function (patter) {
    return moment().format('YYYY-MM-DD HH:mm:ss')
})
let vm=new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount('#app')
axios.interceptors.request.use(function (config) {
  //let user = JSON.parse(window.sessionStorage.getItem('access-user'));
      console.log(config)
      if (config.url=='users/login'){
        return config;
}
  let user = JSON.parse(window.sessionStorage.getItem('user'))
  if (user) {
    token = user.token
  }
  config.headers.common['token'] = token;
  return config;
},
    function (error) {
  // Do something with request error
  console.info("error: ");
  console.info(error);
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
  console.log(vm.$route.name)

  //|| (vm.$route.name!='Login')
  if ((vm.$route.name!='Register' &&(vm.$route.name!='Login')) ){
      console.log('2323')
    if (response.data && response.status==200) {
      if (response.data.token){
        let token={username:response.data.username,
          token:response.data.token
        }

        return response;

      }else{
        alert('登录过期，请重新登录')
        router.push('/login')
        return  response
      }
    }
    return response;

  }

  return  response

}, function (error) {
  // Do something with response error
  console.dir(error);
  return Promise.reject(error);
})
