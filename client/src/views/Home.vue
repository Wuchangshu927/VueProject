<template>
  <v-app>
      <v-app-bar
              id="app-bar"
              absolute
              app

              flat
              height="60"
      >
        <v-btn class="mr-3"
               elevation="1"
               fab
               small
               @click="drawer=!drawer"
        >
          <v-icon v-if="value">mdi-menu</v-icon>
          <v-icon v-else>
            mdi-dots-vertical
          </v-icon>

        </v-btn>

        <v-toolbar-title
                class="hidden-sm-and-down font-weight-light"
                v-text="$route.name"
        />

<!--        <v-avatar>{{$store.state.isLogin?'成功':$router.push('/login')}}</v-avatar>-->
        <v-spacer/>

        <div class="mx-3" />
        <v-btn
                class="ml-2"
                min-width="0"
                text
                to="/home"
        ><v-icon>mdi-view-dashboard</v-icon></v-btn>
        <v-btn
                class="ml-2"
                min-width="0"
                text
                to="/home/user"
        >
          <v-icon>mdi-account</v-icon>
        </v-btn>
        <v-avatar style="border: 1px solid #cccccc" class="ml-2">{{$store.state.username}}</v-avatar>


        <v-btn
                class="ml-2"
                min-width="0"
                @click="logout"
                title="注销"
        >
          <v-icon>mdi-logout</v-icon>
        </v-btn>


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
          <v-list-item v-for="item,i in menus"
                       :key="i"
                       :to=item.to>
            <v-avatar :class="['mdi',item.icon]"></v-avatar>
            <v-list-item-title >{{item.title}}</v-list-item-title>
          </v-list-item>
        </v-list>


        <template v-slot:append>
          <v-list-item
            to=""
          >
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>文档/更多</v-list-item-title>


          </v-list-item>
        </template>





    </v-navigation-drawer>
    <v-content>
      <router-view/>

      <v-footer absolute class="">

        footer
      </v-footer>
    </v-content>

  </v-app>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data(){
    return{
    drawer:true,
      menus:[{
      title:"主页",
        to:'/home',
        icon:'mdi-home'
      },
      {
        title:"页面",
        to:'/home/view',
        icon:'mdi-home'
      }]
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

<style>

  #app-bar{
    border-bottom: 1px solid #cccccc; ;
  }

</style>
