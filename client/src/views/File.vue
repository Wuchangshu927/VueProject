<template>
    <v-container>
        <v-btn @click="create">生成</v-btn>
    </v-container>

</template>

<script>
    export default {
        name: "File",
        data(){

        },
        methods:{
            create(){
                this.getRequest('xlsx').then(res=>{
                    console.log(res)
                })
            }
        }
    }
</script>

<style scoped>

</style>
