<template>
  <v-app>
      <v-app-bar
              id="app-bar"
              absolute
              app
              flat
              height="75"
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
    <v-navigation-drawer
            dark
            v-model="drawer"
            width="200"
            mobile-break-point="640"
            app

            permanent
    >

<!--      <template v-slot:img="props">-->
<!--        <v-img-->
<!--                :gradient="`to bottom, ${barColor}`"-->
<!--                v-bind="props"-->
<!--        />-->
<!--      </template>-->

      <v-divider class="mb-1" />

      <v-list
              dense
              nav
      >
        <v-list-item class="pa-0">
          <v-list-item-avatar
                  class="align-self-center"
                  color="white"
                  contain
          >
            <v-img class="pa-0"
                    src="https://demos.creative-tim.com/vuetify-material-dashboard/favicon.ico"

            />

          </v-list-item-avatar>

          <v-list-item-content class="pa-0" >
            <v-list-item-title class="pa-0" style="font-size: 25px">Wcs</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>
      <v-list
              expand
              nav
      >
        <div></div>
        <template v-for="(item,i) in items">
          <base-item-group
                  v-if="item.children"
                  :key="`group-${i}`"
                  :item="item"
          >
            <!--  -->
          </base-item-group>
          <base-item
                  v-else
                  :key="`item-${i}`"
                  :item="item"
          />
        </template>

      </v-list>

      <template v-slot:append>
          <v-list-item
            to=""
          >
            <v-list-item-icon>
              <v-icon>mdi-file-document</v-icon>
            </v-list-item-icon>
            <v-list-item-title>文档/更多</v-list-item-title>


          </v-list-item>
        </template>

    </v-navigation-drawer>
    <v-content>
      <setting></setting>
      <router-view/>


      <v-footer absolute >
        © 2018 All Rights Reserved. AGILE-BPM
      </v-footer>
    </v-content>

  </v-app>
</template>

<script>
// @ is an alias to /src
import setting from './Setting/index'
export default {
  name: 'Home',
  data(){
    return{
      drawer:true,
      items: [
        {
          icon: 'mdi-view-dashboard',
          title: '仪表盘',
          to: '/home/view',
        },
        {
          icon: 'mdi-account',
          title: '用户',
          to: '/home/user',
        },
        {
          title: '邮件',
          icon: 'mdi-gmail',
          to: '/home/mail',
        },
        {
          title: '决策树',
          icon: 'mdi-arrow-decision-outline',
          to: '/home/decisiontree',
        },
        {
          title: '表格',
          icon: 'mdi-table',
          to: '/home/table',
        },
        {
          title: '选项卡',
          icon: 'mdi-tab',
          to: '/home/tab',
        },
          {
          title: '排行',
          icon: 'mdi-tab',
          to: '/home/rank',
        }
      ],
      value:false

    }
  }


  ,methods:{
    logout(){
      this.$store.commit('setLogin',false)
      this.$router.push('/login')
    },
    mapItem (item) {
      return {
        ...item,
        children: item.children ? item.children.map(this.mapItem) : undefined,
        title: this.item.title,
      }
    },
  },
computed:{

  profile () {
    return {
      avatar: true,
      title: this.avatar,
    }
  },
},
  components: {
    setting
  }
}
</script>

<style>

  #app-bar{
    border-bottom: 1px solid #cccccc; ;
  }

</style>
