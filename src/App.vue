<template>
  <div id="app" :style="{height:$store.state.height+'px'}">
    <router-link to="/"></router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import {home} from "@/network/response/Users";
export default {
  name:'App',
  data(){
    return{
    }
  },
  methods:{
    login(data){
      const s=sessionStorage
	    home('/loginUser',data).then(res=> {
	      if(res.data===2||res.data===1)
        {
          this.$router.replace('/')
        }else if(res.data===3) {
	        //学生
	        if(s.getItem('Person')==='学生')
          {
            this.$store.dispatch('getInform','/PostStudent')
            //教师
          }else if (s.getItem('Person')==='教师'){
	          this.$store.dispatch('getInform','/PostTeacher')
          }
	      }
			})
    },
  },
  created() {
    const a=sessionStorage
    if(a.getItem('Judge')==='true'){
      let i
      if(a.getItem('Person')==='学生'){
        i=1
      }else if(a.getItem('Person')==='教师'){
        i=2
      }else{
        i=3
      }
      const b={account:a.getItem('Account'),password:a.getItem('Password'),person:i}
	    this.login(b)
    }else{
	    this.$router.replace('/')
    }

         //获取页面高度
    let height=document.documentElement.clientHeight
    if(height<1000){
      height=1000
    }else{
      height=(height-1).toString()
    }
    this.$store.commit('updateHeight',height)
    window.onresize = () => {
      return (() => {
        height=document.documentElement.clientHeight
        if(height<1000){
          height=1000
        }else{
          height=(height-1).toString()
        }
        this.$store.commit('updateHeight',height)
      })()
    }
	}
}
</script>

<style>
@import "assets/css/App/base.css";
#app{
	background-color: white;
	width: 100%;
	margin: auto;
	position: relative;
	display: flex;
	flex-direction: column;
	box-shadow: 0 -10px 20px darkgrey;
	border-bottom: 1px solid darkgrey;
}
@media screen and (min-width: 1000px){
	#app{
		width: 1000px;
	}
}
</style>
