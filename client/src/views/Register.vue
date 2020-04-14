<template>
<v-app>
    <v-app-bar app><v-toolbar-title>用户注册</v-toolbar-title></v-app-bar>
    <v-content class="d-inline-flex text-center">


            <v-divider></v-divider>
            <v-card-text>

                <v-form class="loginContainer">
                    <v-text-field label="用户名" v-model="formData.username"></v-text-field>
                    <v-text-field label="密码" v-model="formData.password" type="password"></v-text-field>
                    <v-card-text class="d-inline-block">

                        <v-btn @click="register">注册</v-btn>
                        <v-btn @click="toLogin">返回登录</v-btn>
                        <v-btn @click="getName">组价匿名</v-btn>

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
                    this.$axios.post('users/register',{formData:this.formData})
                        .then(response=>{
                            console.log(response.data)


                        })



                }

            },
            register(){
                if (this.formData.username&&this.formData.password){
                    this.$axios.post('users/register',{formdata:this.formData})
                        .then(response=>{
                        console.log(response.data)
                        })
                        .catch(error=>{
                            console.log('服务器内部错误！')
                        })

                    this.$store.commit('setUsername',this.formData.username)
                    // this.$router.push('/home')
                }

            },
            getsession(){
                let user=window.sessionStorage.getItem('user')
                console.log(user)
            },
            getName(){
                console.log(this.$route.name)
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
