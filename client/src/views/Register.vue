<template>
<v-app>
    <v-app-bar app><v-toolbar-title>用户注册</v-toolbar-title></v-app-bar>
    <v-content class="d-inline-flex text-center">


            <v-divider></v-divider>
            <v-card-text>

                <v-form class="loginContainer">
                    <v-text-field label="用户名" v-model="formData.username"></v-text-field>
                    <v-text-field label="密码" v-model="formData.password" type="password"></v-text-field>
                    <v-text-field label="确认密码" v-model="formData.password2" type="password"></v-text-field>
                    <v-card-text class="d-inline-block">

                        <v-btn @click="register">注册</v-btn>
                        <v-btn @click="toLogin">返回登录</v-btn>

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
                    username:'',
                    password:'',
                    password2:''
                }
            }
        },
        methods:{
            register(){
                if (this.formData.username&&this.formData.password){
                    this.postRequest('users/register',{formdata:this.formData})
                        .then(response=>{
                        console.log(response.data)
                        })

                    this.$store.commit('setUsername',this.formData.username)
                    // this.$router.push('/home')
                }
            },
            toLogin(){
                this.$router.push('/login')
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
