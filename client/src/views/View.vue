<template>
    <v-card class="ma-2 px-1 ">
        <v-btn @click="test">连接到服务器</v-btn>
        <v-btn @click="close">关闭连接</v-btn>
        <v-btn @click="getData">测试连接</v-btn>
        <v-btn @click="getName">Nme</v-btn>
        <v-card-text>{{$store.commit('getLogin')}}</v-card-text>
        <v-card-text  class="  d-inline-flex ma-0 py-0 px-2" v-for="item,i in msg" :key="i">
            <p>{{item.username+":   "}}</p>
            <p>{{item.msgContent}}</p>
            <v-spacer></v-spacer>
            <p> {{item.sendTime}}</p>
        </v-card-text>
        <v-footer class="">
            <v-text-field v-model="msgContent"  class="mx-2"></v-text-field><v-btn @click="send">发送</v-btn>
        </v-footer>
    </v-card>
</template>


<script>
    import moment from 'moment'
    export default {
        name: "View",
        data(){
            return{
                msg:[],
                username:this.$store.state.username,
                msgContent:'',
                ws:false
            }
        },
        methods:{
            test(){
                // eslint-disable-next-line no-undef
                let vm=this
                let ws = io('ws://127.0.0.1:3000');
                console.log(ws)
                this.ws=ws
                ws.on('receiveMsg', function (data) {
                    console.log(data)
                    vm.msg.push(data.msg)
                })

                ws.on('connect', function (e) {
                    console.log("连接服务器成功");
                    ws.emit('login',{userid: vm.username});
                    vm.$store.commit('setConnected',true)
                    console.log(ws)
                })



            },
            getMsg(){
                console.log(this.msg)
            },
            send(){
                let vm=this
                if(vm.ws){
                    let to=''
                    if(vm.username=='wcs'){
                        to='wcc'
                    }
                    if(vm.username=='wcc'){
                        to='wcs'
                    }
                    let time=Date.now()
                    let timestr=moment(time).format("YYYY年MM月DD日 HH:mm:ss")
                    let msg1={
                        username:this.username,
                        sendTime:time,
                        msgContent:this.msgContent
                    }
                    vm.msg.push(msg1)
                    // let m='i love you'
                    vm.ws.emit('sendMsg',{from: this.username, to: to, msg:msg1
                    });
                    this.msgContent=''
                }
            },
            close(){
                // this.ws.close()
                this.$store.commit('setConnected',false)
                // console.log(this.ws)
            },
            getData(){
                this.getRequest('users/usersData').then(response=>{
                    console.log(response)
                }).catch(error=>{
                    console.log('获取失败')
                })
            },
            getName(){
                console.log(this.$route.name)
            }
        }
    }
</script>

<style scoped>

</style>
