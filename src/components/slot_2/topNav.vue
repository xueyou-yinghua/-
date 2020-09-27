<template>
    <div class="top">
        <el-button
                style="position: absolute;left: 0;height: 100%;width: 15%;"
                type="danger"
                @click="elBtnClick"
        >返回</el-button>
        {{text}}
    </div>
</template>

<script>
    export default {
        name: "TopNav",
        props:{
          text:String,
          url:{
            type:String,
            default:'/sMain/first',
          }
        },
        methods:{
            elBtnClick(){
                this.$router.replace(this.url)
            },
        }
    }
</script>

<style scoped>
    .top{
        height: 49px;
        line-height: 49px;
        background-color: darkgrey;
        position: relative;
        color: white;
        text-align: center;
        letter-spacing: 30px;
        box-shadow: 0 10px 10px darkgrey;
        margin-bottom: 5%;
    }
</style>