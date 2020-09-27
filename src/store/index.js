import Vue from 'vue'
import Vuex from 'vuex'
import {home} from "@/network/response/Users";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    information:{},
    img:require('../assets/img/unfinishedLogin/未登录.jpg'),
    imgView:[require('../assets/img/unfinishedLogin/未登录.jpg')],
    height:'',
    ClassList:[{},{},{}]
  },
  mutations: {
    getInformation(state,data){
      state.information=data
      state.img=require("G:/asp.net/img/"+data.img)
      state.imgView=[require("G:/asp.net/img/"+data.img)]
    },
    updateHeight(state,data){
      state.height=data
    },
    GetList(state,data){
      state.ClassList=data
    }
  },
  actions: {
    getInform(context,url){
      return new Promise((resolve, reject) => {
        home(url,{account:sessionStorage.getItem('Account')}).then(res=>{
          context.commit('getInformation',res.data)
          resolve()
        })
      })
    },
    getList(context,data){
      return new Promise((resolve, reject) => {
        home('/ClassPost',data).then(res=>{
          context.commit('GetList',res.data)
          resolve()
        })
      })
    }
  },
  modules: {

  },
  getters:{
    personInform(state){
      let list=[]
      const b=state.information
      for(let key in b){
        if(key==='account'||key==='img'||key==='judge'){}else{
          list.splice(list.length,1,b[key])
        }
      }
      return list
    },
    ClassView(state){
      const a=state.ClassList[0]//课程信息
      const b=state.ClassList[1]//教师信息
      const c=state.ClassList[2]//教师授课信息
      let d=[]
      if(a!==undefined){
        for(let i=0;i<a.length;i++){
        //课程名称,教师名称,上课时间,上课地址,开设学期,剩余人数
        const e={ClassName:a[i].name,ClassTime:c[i].time,Address:c[i].address,time:a[i].time,num:(a[i].num-c[i].num),teacher:{collage:b[i].collage,name:b[i].name,school:b[i].school,type:b[i].type,sex:b[i].sex,specialty:b[i].specialty}}
        d.push(e)
        }
      }else{
        return null
      }
      return d
    },
    EndClassView(state){
      const a=state.ClassList[3]//课程信息
      const b=state.ClassList[4]//教师信息
      const c=state.ClassList[5]//教师授课信息
      let d=[]
      if(a===undefined){
        return null
      }else{
        for(let i=0;i<a.length;i++){
        //课程名称,教师名称,上课时间,上课地址,开设学期,剩余人数
        const e={ClassName:a[i].name,ClassTime:c[i].time,Address:c[i].address,time:a[i].time,num:(a[i].num-c[i].num),teacher:{collage:b[i].collage,name:b[i].name,school:b[i].school,type:b[i].type,sex:b[i].sex,specialty:b[i].specialty}}
        d.push(e)
        }
      }
      return d
    }
  }
})
