<template>
  <div class="student">
    <first-slot class="stu"
                :url="index.url"
                v-for="index in list">
      <p slot="left_one">{{index.text}}</p>
      <img :src="index.image" slot="img_one">
    </first-slot>
  </div>
</template>

<script>
import FirstSlot from "@/components/slot/firstSlot";
export default {
  name: "student",
  components: {FirstSlot},
  data(){
    return{
      list:[
        {text:'选课',url:'/sMain/curricula',image:require('../../assets/img/xuanke/选课管理-01max.png')},
        {text:'查看成绩',url:'/sMain/score',image:require('../../assets/img/score/成绩.png')},
        {text:'个人信息',url:'/sMain/person',image:require('../../assets/img/personal/个人中心max.png')},
      ]
    }
  }
}
</script>

<style scoped>
*{
  font-size: 1.5rem;
}
.student{
  position: relative;
  height: 100%;
  width: 100%;
/*  height: 1260px;
  width: 1000px;*/
}

.stu:nth-child(1){
  width: 50%;
  height: 100%;
  background-color: #e1f3d8;
  position: absolute;
  left: 0;
  top: 0;
}
.stu:nth-child(2){
  width: 50%;
  height: 50%;
  background: #00B7FF;
  position: absolute;
  right: 0;
  top: 0;
}
.stu:nth-child(3){
  width: 50%;
  height: 50%;
  background: #a0cfff;
  position: absolute;
  right: 0;
  top:50%;
}
</style>