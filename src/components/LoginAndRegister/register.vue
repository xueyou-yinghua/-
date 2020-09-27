<template>
  <div class="register">
    <img src="../../assets/img/BeiJingTuPian/81326694_p0_master1200.jpg" width="100%">
    <!--账号密码-->
		<div class="input">
			<el-input
					maxlength="16"
					autofocus
					v-model="account"
					prefix-icon="el-icon-user"
					placeholder="账号"
			></el-input>
			<el-input style="margin-top: 50px"
								maxlength="16"
								v-model="password"
								prefix-icon="el-icon-unlock"
								placeholder="密码"
								show-password
			></el-input>
      <el-input style="margin-top: 50px"
								maxlength="18"
								v-model="id"
								prefix-icon="el-icon-user"
								placeholder="身份证号"
								show-password
			></el-input>
		</div>
    <!--单选按钮-->
    <div class="radio">
      <el-radio-group
          style="margin-top: 50px;"
          v-model="judge"
          fill="#ff8d99"
          text-color="white"
          size="medium">
        <el-radio-button label="学生"></el-radio-button>
        <el-radio-button label="教师"></el-radio-button>
        <el-radio-button label="管理员"></el-radio-button>
      </el-radio-group>
    </div>
    <!--按钮-->
		<div class="btn">
			<el-button type="danger"
								 round
								 @click="BtnClick"
			>注册</el-button>
		</div>
  </div>
</template>

<script>
  import {home} from "@/network/response/Users";

  export default {
    name: "register",

    data(){
      return{
        account: '',
        password: '',
        id: '',
        judge:'学生',
      }
    },
    methods:{
      BtnClick(){
        if(this.password!=='12345678'){
          this.error('密码错误')
        }else{
          if(this.id.length!==18){
            this.error('身份证号不正确')
          }else{
            let i
              if(this.judge==='学生'){
                i=1
              }else if(this.judge==='教师'){
                i=2
              }else{
                i=3
              }
            const a={account: this.account,password: this.password,id: this.id,person:i}
            home('/register',a).then(res=>{
              	if(res.data===2){
									this.error('您的输入错误')
								}else if(res.data===1){
									this.error('')
								}else if(res.data===3){//跳转到登录页面
              	  this.$notify.success({
                    title:'成功',
                    message: '注册成功',
                    duration:2000,
                  })
                  this.$router.replace('/')
								}
            })
          }
        }
      },
      error(text){
          this.$notify.error({
            title:'错误',
            message:text,
            duration:1500
          })
      }
    }
  }
</script>

<style scoped>
    *{
        font-size: 1.4rem;
    }
    .login{
			width: 100%;
			margin: auto;
			position: relative;
			display: flex;
			flex-direction: column;
			background-color: white;
    }
    .input{
			width: 70%;
			margin: 10% auto 0;
    }
    .btn{
			display: flex;
      height: 60px;
			justify-content: center;
			width: 80%;
			margin: 20% auto 0;
    }
    .btn .el-button{
			width: 300px;
    }
		@media screen and (max-width: 240px){
			.btn{
				display: flex;
				flex-direction: column;
				width: 100%;
				margin: 20% 0 0 0;
			}
			.btn .el-button{
				width: 80%;
				margin: auto;
			}
		}
</style>