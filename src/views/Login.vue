<template>
<v-app>
    <v-app-bar app><v-toolbar-title>登录页</v-toolbar-title></v-app-bar>
    <v-content class="d-inline-flex text-center">


            <v-divider></v-divider>
            <v-card-text>
<!--                <v-card-title class="">用户登录</v-card-title>-->
                <v-form class="loginContainer">
                    <v-text-field label="用户名" v-model="formData.username"></v-text-field>
                    <v-text-field label="密码" v-model="formData.password" type="password"></v-text-field>
                    <v-card-text class="d-inline-block">
                        <v-btn  class="col-2" @click="login">登录</v-btn>
                        <v-btn @click="register">注册</v-btn>
<!--                        <v-btn @click="getsession">get</v-btn>-->
                        <v-btn @click="getName">getName</v-btn>
                    </v-card-text>
                </v-form>
            </v-card-text>

    </v-content>
</v-app>
</template>

<script>
    export default {
        name: "Login",
        data(){
            return{
                formData:{
                    username:'wcs',
                    password:'123'
                }
            }
        },
        methods:{
            login(){
                let vm=this
                if (this.formData.username&&this.formData.password){
                    this.$axios.post('users/login',{formData:this.formData})
                        .then(response=>{
                            console.log(response.data)
                            if (response.data.stutas==0){
                                vm.$store.commit('setUsername',this.formData.username)
                                console.log(response.data.token)
                                window.sessionStorage.setItem('user',JSON.stringify({token:response.data.token}))
                                vm.$store.commit('setLogin',true)
                                vm.$router.push('/home')
                            }
                        })
                        .catch(error=>{
                            console.log('服务器内部错误！')
                        })


                }
            },
            register(){
                console.log('注册')
                this.$router.push('/register')
            },
            getsession(){
                let user=window.sessionStorage.getItem('user')
                console.log(user)
            },
            getName(){
                console.log(this.$route.name)
            }
        }
    }
</script>

<style scoped>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 180px auto;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background: #ffffff;
        border: 1px solid #eaeaea;
        box-shadow: 0 0 25px #cac6c6;

    }

    .loginTitle {
        margin: 0 auto 40px auto;
        text-align: center;
        color: #505458;
    }

    .loginRemember {
        margin: 0 0 35px 35px;
        text-align: left;
    }
</style>
