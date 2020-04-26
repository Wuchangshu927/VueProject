<template>
    <v-app class="loginPage">
        <v-content class="">
            <div  class="row loginContainer">
                <div align="" class="col-sm-7" style="    box-sizing: border-box"
                     v-if="$vuetify.breakpoint.mdAndUp">
                    <div class="col-10" style="position: absolute; right:0px;color: white;">
                        <div class=""><h1>Wcs</h1></div>
                        <div class="mb-1"></div>
                        <h4>欢迎使用 <strong> Wcs-管理平台</strong></h4>
                        <v-content  class="dsc" >
                            <v-toolbar-title  class="mdi mdi-arrow-right-circle dsc" v-for="item,i in description" :key="i">
                                {{item}}
                            </v-toolbar-title>

                            <strong class="my-4">了解更多详情 <a href="#" target="blank">文档 &raquo;</a></strong>

                        </v-content>


                    </div>
                </div>


                <div align="center" class="mr-sm-1 col-sm-4 " style="box-sizing: border-box">
                    <v-form class="loginForm">
                        <p align="center" class="mb-5" style="font-size: 16px;">Wcs-管理平台</p>
                        <span class="pr"></span>
                        <v-text-field  label="用户名" v-model="formData.username"
                                       prepend-icon="mdi-account"
                        ></v-text-field>

                        <v-text-field label="密码" color="white"
                                      prepend-icon='mdi-textbox-password'
                                      v-model="formData.password"
                                      type="password">
                        </v-text-field>
                        <v-text-field label="密码" color="white"
                                      prepend-icon='mdi-textbox-password'
                                      v-model="formData.password"
                                      type="password">
                        </v-text-field>

                        <v-card-text align="center" class="">
                            <v-btn class="d-flex"
                                   color="blue"
                                   elevation="0"
                                   @click="register">
                                注册
                            </v-btn>
                            <v-toolbar-title class="font-weight-20" style="font-size: 14px">
                                已有账号?
                                <a href="/login">点击此处登录</a></v-toolbar-title>
                        </v-card-text>
                    </v-form>
                </div>
            </div>
            <div align="center"  class="footerC ma-0">
                <div >&copy; 2018 All Rights Reserved. AGILE-BPM</div>
            </div>
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
                },
                description:[
                    '可以跨库构建任意数据结构的数据模型',
                    '轻松的生成数据模型的容器-表单，并进行一个业务流转',
                    '高效的流程任务处理能力',
                    '稳健低耦合的流程引擎核心',
                    '强大丰富的表单组件支持，快速构建所需的业务应用<',
                    '多环境、多数据源真实复杂场景的支持',
                    '基于基础组件,未来更多应用的可贡献性、可共享性']
            }
        },
        methods:{
            login(){
                let vm=this
                if (this.formData.username&&this.formData.password){
                    this.postRequest('users/login',{formData:this.formData})
                        .then(response=>{

                            vm.$store.commit('setUsername',this.formData.username)
                            console.log(response)
                            window.localStorage.setItem('user',JSON.stringify({token:response.token}))
                            vm.$store.commit('setLogin',true)
                            vm.$router.push('/home')

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

<style scoped lang="scss">
    .loginPage{
        background-image: url('../assets/img/login-background.jpg');
        background-size: cover;
    }
    .loginContainer {
        position: relative;
        border-radius: 15px;
        background-clip: padding-box;
        margin: 200px auto;
    }
    .dsc{
        font-size: 14px;
    }
    .loginForm {
        border-radius: 15px;
        background-clip: padding-box;
        width: 350px;
        padding: 35px 35px 15px 35px;
        background-color: rgba(38, 139, 234, 0.2);
        border: 1px solid #268bea;
        box-shadow: 0 0 25px #2578ca;
    }

    .footerC{
        color: white;
    }
</style>
