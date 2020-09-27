<template>
  <div class="personInform">
    <top-nav text="个人信息" url="/sMain/person"/>
    <div class="content">
      <Content_ui v-for="(index,key) in listView"
                  class="text">
        <div slot="img">{{index}}</div>
        <div slot="text">
          {{$store.getters.personInform[key]}}
        </div>
      </Content_ui>
    </div>
    <div class="btn">
      <el-button
          type="danger"
          @click="BtnClick"
          round
      >切换账号</el-button>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/slot_2/topNav";
import Content_ui from "@/components/slot_2/Content";
export default {
  name: "personInform",
  components: {Content_ui, TopNav},
  data(){
    return{
      listView:['姓名','性别','生日','年龄','班级','学院','专业','年级'],
    }
  },
  methods:{
    BtnClick(){
      sessionStorage.setItem('Judge','false')
      this.$router.replace('/')
    },
  }
}
</script>

<style scoped>
.personInform{
  height: 100%;
  background-image: linear-gradient(#95c8f8,#a4e3fe);
}
.text{
  border-top: 1px solid white;
}
.btn{
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translate(-50%);
  width: 50%;
}
.btn .el-button{
  width: 100%;
}
</style>