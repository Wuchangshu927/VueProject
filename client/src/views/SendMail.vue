<template>
    <v-container class="">
           <v-card-content class="py-3">

                <v-text-field class="mx-3 mt-3"
                        label="邮件主题"
                        outlined
                        v-model="mailMsg.theme"
                >
                </v-text-field>
               <v-text-field class="mx-3 mt-3"
                    label="收件人"
                    v-model="mailMsg.to"
                    outlined
            ></v-text-field>

               <v-divider></v-divider>


                   <v-col class="col-12">

                       <v-textarea
                               label="请输入正文"
                               outlined
                               v-model="mailMsg.content"
                   >
                       </v-textarea>
                   </v-col>
               <v-row align="right" class="col-12 my-0">

                   <v-col align="right" class="col-12">
                       <v-btn @click="sendMail">发送</v-btn>

                   </v-col>



               </v-row>

           </v-card-content>

    </v-container>
</template>

<script>
    export default {
        name: "SendMail",
        data(){
            return{
                mailMsg:{
                    theme:'',
                    to:'',
                    content:''
                }
            }
    },
        methods:{
            sendMail(){
                if(this.mailMsg.to){
                this.postRequest('users/')


                }
            }
        }
    }
</script>

<style scoped>

</style>
