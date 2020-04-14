<template>
  <v-app>
      <v-app-bar height="50" app>
        <v-btn fab elevation="0"  size="20"
               small
               @click="drawer=!drawer"
        >
          <v-icon>mdi-menu</v-icon>

        </v-btn>
        <v-toolbar-title >{{$route.name}}</v-toolbar-title>
<!--        <v-avatar>{{$store.state.isLogin?'成功':$router.push('/login')}}</v-avatar>-->
        <v-spacer/>
        <v-toolbar-title :class="['mdi',$store.state.connected?'mdi-lan-connect':'mdi-lan-disconnect']"><v-icon></v-icon></v-toolbar-title>

        <v-avatar>{{$store.state.username}}</v-avatar>
        <v-icon @click="logout" title="注销">mdi-logout</v-icon>
      </v-app-bar>
    <v-navigation-drawer  v-model="drawer" width="200" mobile-break-point="640" app>

      <v-list-item>

        <v-list-item-content>

          <v-list-item-title class="title">
            <v-avatar size="30" class="mdi mdi-account-box"></v-avatar>
            Application
          </v-list-item-title>
          <v-list-item-subtitle class="ml-3">
            subtext
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

        <v-list>
          <v-list-item to="/home/view">
            <v-list-item-title >你好</v-list-item-title>
          </v-list-item>
          <v-list-item to="/home/user">
            <v-list-item-title>gfdf g</v-list-item-title>
          </v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
    <v-footer class="">
      <v-spacer>g</v-spacer>

    </v-footer>
  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
    drawer:true
  }}
  ,methods:{
    logout(){
      this.$store.commit('setLogin',false)
      this.$router.push('/login')
    }
  },

  components: {
  }
}
</script>
