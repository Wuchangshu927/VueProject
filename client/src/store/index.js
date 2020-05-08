import Vue from 'vue'
import Vuex from 'vuex'
import { getToken, setToken, removeToken } from '@/utils/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken(),
    name: '',
    avatar: '',
    roles: [],
    isLogin:false,
    username:'wcs',
    connected:false
  },
  mutations: {
    getLogin(state){
      return state.isLogin
    },
    setLogin(state,value){
      state.isLogin=value
    },
    getConnected(state){
      return state.connected
    },
    setConnected(state,data){
      return state.connected=data
    }
    ,
    getUsername(state){
      return state.username
    }
    ,setUsername(state,username){
      state.username=username
    }
  },
  actions: {
  },
  modules: {
  }
  ,getters:{

    token: state => state.token,
    //avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles
  }
})
