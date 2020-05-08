<template>
    <v-card>
        决策树
        <v-btn @click="getMockData">测试Mock数据</v-btn>

    </v-card>
</template>

<script>
    export default {
        name: "DecisionTree",
        methods:{
            getMockData(){
                this.getRequest('api/his/home').then(reponse=>{
                    console.log(reponse)
                })
            }

        }
    }
</script>

<style scoped>

</style>
