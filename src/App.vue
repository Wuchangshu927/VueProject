<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
  export  default {
    watch:{
      '$route.name':function (val) {
        let  islogined=this.$store.state.isLogin
        console.log(islogined)

        if (this.$route.name!="Register"){
          if (!islogined){
            this.$router.push('/login')
          }
        }

        return val


      }
    },
  }
</script>

<style lang="scss" scoped
>
</style>
