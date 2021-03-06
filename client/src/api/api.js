import axios from 'axios'
import {Message} from 'element-ui';
import router from '../router'
import BaseUrl from '../plugins/baseUrl'

let token = '';
axios.defaults.withCredentials = false;
axios.defaults.timeout=1000*60
axios.defaults.headers.common['token'] = token;
//后端基础api
axios.defaults.baseURL = BaseUrl;
// 添加请求拦截器，在请求头中加
axios.interceptors.request.use(config => {
    console.log(localStorage.getItem('user'))
    if (localStorage.getItem('user')) {
        config.headers.token = JSON.parse(localStorage.getItem('user')).token
    }
    return config;
}, error => {
    return Promise.reject(error);
});

axios.interceptors.response.use(success => {
    console.log(success)

    if (success.status && success.status == 200 && success.data.status == 500) {

        Message.error({message: success.data.msg})
        return;
    }
    if (success.status && success.status == 200 && success.data.status == 401) {
        Message.error({message: success.data.msg})
        setTimeout(function () {
            router.replace('/');
        },1000)

        return;
    }
    if (success.status && success.status == 200 && success.data.status == 403) {
        Message.error({message: success.data.msg})
        return;
    }
    if (success.data.msg) {
        Message.success({message: success.data.msg})
    }
    return success.data;
}, error => {
    console.log(error.response.status)
    if (error.response.status == 504 || error.response.status == 404) {
        Message.error({message: '服务器被吃了( ╯□╰ )'})
    } else if (error.response.status == 403) {
        Message.error({message: '权限不足，请联系管理员'})
    } else if (error.response.status == 401) {
        Message.error({message: '尚未登录，请登录'})

    } else {
        if (error.response.data.msg) {
            Message.error({message: error.response.data.msg})
        } else {
            Message.error({message: '未知错误!'})
        }
    }
    return;
})

let base = '';

export const postKeyValueRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params,
        transformRequest: [function (data) {
            let ret = '';
            for (let i in data) {
                ret += encodeURIComponent(i) + '=' + encodeURIComponent(data[i]) + '&'
            }
            return ret;
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    });
}
export const postRequest = (url, params) => {
    return axios({
        method: 'post',
        url: `${base}${url}`,
        data: params
    })
}
export const putRequest = (url, params) => {
    return axios({
        method: 'put',
        url: `${base}${url}`,
        data: params
    })
}
export const getRequest = (url, params) => {
    return axios({
        method: 'get',
        url: `${base}${url}`,
        params: params
    })
}
export const deleteRequest = (url, params) => {
    return axios({
        method: 'delete',
        url: `${base}${url}`,
        params: params
    })
}
