<template>
    <div class="bottomMain">
      <bottom-bar v-for="(index,key) in list" :url="index.url">
        <img :src="index.img" slot="icon">
        <img :src="index.imging" slot="icon-active">
        <p slot="name">{{index.text}}</p>
      </bottom-bar>
    </div>
</template>

<script>
    import BottomBar from "../../components/slot/topBar.vue";
    export default {
        name: "bottomMain",
        components: {BottomBar},
        data(){
            return{
                list:[
                    {text:'首页',url:'/sMain/first',img:require("../../assets/img/first/首页.png"),imging:require("../../assets/img/first/首页ing.png")},
                    {text:'选课',url:'/sMain/curricula',img: require('../../assets/img/xuanke/选课管理-01.png'),imging: require('../../assets/img/xuanke/选课管理-01ing.png')},
                    {text:'个人中心',url:'/sMain/person',img: require('../../assets/img/personal/个人中心.png'),imging: require('../../assets/img/personal/个人中心ing.png')}
                ]
            }
        },
        created() {
        }
    }
</script>

<style scoped>
    .bottomMain{
        display: flex;
        flex-direction: row;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -5px 5px darkgrey;
    }
</style>