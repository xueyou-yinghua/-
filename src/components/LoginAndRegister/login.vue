<template>
	<div class="login">
		<img src="../../assets/img/BeiJingTuPian/80857879_p0_master1200.jpg" width="100%">
		<!--账号密码-->
		<div class="input">
			<el-input
					maxlength="16"
					autofocus
					v-model="account"
					prefix-icon="el-icon-user"
					placeholder="学号"
			></el-input>
			<el-input style="margin-top: 50px"
								maxlength="16"
								v-model="password"
								prefix-icon="el-icon-unlock"
								placeholder="密码"
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
								 @click="registerClick"
			>注册</el-button>
			<el-button type="danger"
								 round
								 @click="loginClick"
			>登录</el-button>
		</div>
	</div>
</template>

<script>
    import {home} from "@/network/response/Users";
    export default {
        name: "login",
        data(){
            return{
              account:'',
              password:'',
              judge:'学生',
            }
        },
        methods:{
					loginClick(){
						//密码长度要大于等于8位
						if(this.password.length>=8){
						  let i
              if(this.judge==='学生'){
                i=1
              }else if(this.judge==='教师'){
                i=2
              }else{
                i=3
              }
							const data={account:this.account,password:this.password,person:i}
							home('/loginUser',data).then(res=> {
								if(res.data===2){
									this.error('账号密码错误')
								}else if(res.data===1){
									this.error('当前账号没有注册')
								}else if(res.data===3) {
                  this.local()
								  if(this.judge==='学生')
                  {
                    this.$store.dispatch('getInform','/PostStudent').then(res=>{
                          sessionStorage.setItem('Specialty',this.$store.state.information.specialty)
                      this.$router.replace('/sMain/first')})
                  }else if (this.judge==='教师'){
								        sessionStorage.setItem('Specialty',this.$store.state.information.specialty)
								    this.$store.dispatch('getInform','/PostTeacher').then(res=>{
	            this.$router.replace('/tMain/first')
            })
                  }else{
								    this.$router.replace('/aMain/first')
                  }
                }
							})
						}else{
							this.error('密码最少8位')
						}
					},
					registerClick(){
						this.$router.push('/register')
					},
					error(text){
						this.$notify.error({
							title:'错误',
							message:text,
							duration:1500,
						})
					},
          success(){
					  this.$notify.success({
              title:'成功',
              message:'登录成功',
              duration:2000,
            })
          },
          local(){
            sessionStorage.setItem('Account',this.account)
            sessionStorage.setItem('Password',this.password)
            sessionStorage.setItem('Person',this.judge)
            sessionStorage.setItem('Judge','true')
          }
        },
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
			justify-content: space-between;
			width: 80%;
			margin: 20% auto 0;
    }
    .btn .el-button{
			width: 200px;
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