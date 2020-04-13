import Vue from 'vue'
import Vuex from 'vuex'
import {fa} from "vuetify/lib/locale";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
})
