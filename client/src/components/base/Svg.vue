<template>
    <svg :id="id"
        :width="width"
        :height="height"
    >

    </svg>
</template>

<script>
    export default {
        props:{
            id:{
                type:String,
                default:''
            },
            width:{
                type: String,
                default: 100
            },
            height:{
                type: String,
                default: 100
            }
        }
    }
</script>

<style scoped>

</style>
