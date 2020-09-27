<template>
  <div class="password">
    <top-nav text="修改密码" url="/sMain/person"/>
    <div class="input">
      <el-input
          v-model="oldPassword"
          prefix-icon="el-icon-unlock"
          max-length="16"
          autofocus
          show-password
          placeholder="旧密码"
      ></el-input>
      <el-input
          v-model="newPassword"
          prefix-icon="el-icon-unlock"
          max-length="16"
          autofocus
          show-password
          placeholder="新密码"
      ></el-input>
      <el-input
          v-model="twiceNPassword"
          prefix-icon="el-icon-unlock"
          max-length="16"
          autofocus
          show-password
          placeholder="确认新密码"
      ></el-input>
    </div>
    <div class="btn">
      <el-button
          type="danger"
          @click="BtnClick"
          round
      >确认修改</el-button>
    </div>
  </div>
</template>

<script>
import TopNav from "@/components/slot_2/topNav";
import {home} from "@/network/response/Users";
export default {
  name: "password",
  components: {TopNav},
  data(){
    return{
      oldPassword:'',
      newPassword:'',
      twiceNPassword:'',
    }
  },
  methods:{
    BtnClick(){
      //如果密码长度小于8位
      if(this.oldPassword.length<8||this.newPassword.length<8||this.twiceNPassword.length<8){
        this.$notify.error({
          title:'错误',
          message:'密码长度不得低于8位',
          duration:1500,
        })
      }else{
        const s=sessionStorage
        //旧密码输入正确
        if(this.oldPassword===s.getItem('Password')){
          //如果新密码的两次输入相同
          if(this.newPassword===this.twiceNPassword){
            const data={account:this.$store.state.information.account,password:this.newPassword}
            home('/updateUser',data).then(res=>{
              console.log(res.data)
              //如果成功，给个消息弹出框和需要用户重新登录
              if(res.data===2){
                this.$notify({
                  type:'success',
                  title:'成功',
                  message:'修改密码成功,需要重新登录',
                  duration:3000,
                })
                s.setItem('Judge','false')
                this.$router.replace('/')
              }
            })
          }
        }else{
          this.$notify.error({
            title:'错误',
            message:'旧密码错误',
            duration:1500,
          })
          this.oldPassword=''
        }
      }
    }
  }
}
</script>

<style scoped>
.password{
  height: 100%;
  background-image: linear-gradient(#a97ca4,#ff8d99);
}
    *{
        font-size: 1.4rem;
    }
    .input{
        width: 70%;
        margin: auto;
    }
    .input .el-input{
        margin-top: 10%;
    }
    .btn{
        width: 40%;
        margin: 20% auto 0;
    }
     .btn .el-button{
        width: 100%;
         margin: auto;
    }
</style>