<template>
  <div class="pc">
    <Content_ui v-for="index in list" :url="index.url">
      <img :src="index.img" slot="img">
      <div slot="text">{{index.text}}</div>
    </Content_ui>
  </div>
</template>

<script>
import Content_ui from "@/components/slot_2/Content";
export default {
  name: "personContent",
  components: {Content_ui},
  data(){
    return{
      list:[
        {text:'查看个人信息',url:'/sMain/personInform',img:require('../../assets/img/personal/个人信息.png')},
        {text:'修改头像',url:'/sMain/img',img:require('../../assets/img/personal/头像.png')},
        {text:'修改密码',url:'/sMain/password',img:require('../../assets/img/personal/密码.png')},
      ]
    }
  }
}
</script>

<style scoped>

</style>