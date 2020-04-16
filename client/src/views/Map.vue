<template>
    <v-container>
        <v-btn @click="test">
            映射
        </v-btn>

    </v-container>
</template>

<script>
    export default {
        name: "Map",
        data(){
            return{

            }
        },
        methods:{
            test(){
                let data=['wcs','wcc','wuli']
                let x =data.map(function (d,i) {
                    return i
                })
                console.log(x)


            }
        }
    }
</script>

<style scoped>

</style>
