import Vue from 'vue'
import VueRouter from 'vue-router'
import store from "../store/index";

const login=()=>import('../components/LoginAndRegister/login.vue')

const register=()=>import('../components/LoginAndRegister/register.vue')

const sMain=()=>import('../views/student/main.vue')
const sFirst=()=>import('../views/student/first.vue')
const curricula=()=>import('../views/student/curricula.vue')
const score=()=>import('../views/student/score.vue')
const sPerson=()=>import('../views/student/person.vue')
const img=()=>import('../views/student/person_update/img.vue')
const password=()=>import('../views/student/person_update/password.vue')
const personInform=()=>import('../views/student/person_update/personInform.vue')


const tMain=()=>import('../views/teacher/main.vue')

const aMain=()=>import('../views/Admin/main.vue')


Vue.use(VueRouter)

const routes = [
  {
    path:'/sMain',
    redirect:'/sMain/first'
  },
  {
    path:'/',
    meta:{
      title:'登录'
    },
    component:login,
  },
  {
    path:'/register',
    meta: {
      title:'注册'
    },
    component:register,
  },
  {
    path: '/sMain',
    meta:{
      title: '学生页面'
    },
    component:sMain,
    children:[
      {
        path:'first',
        meta:{
          title:'首页'
        },
        component:sFirst
      },
      {
        path:'curricula',
        meta:{
          title:'选课'
        },
        component:curricula
      },
      {
        path:'person',
        meta:{
          title:'个人信息'
        },
        component:sPerson
      },
    ]
  },
  {
    path: '/tMain',
    meta:{
      title: '教师页面'
    },
    component:tMain,
  },
  {
    path: '/aMain',
    meta:{
      title: '管理员页面'
    },
    component:aMain,
  },
  {
    path:'/sMain/score',
    meta:{
      title:'成绩'
    },
    component:score
  },
  {
    path: '/sMain/img',
    meta: {
      title: '修改头像'
    },
    component:img,
  },
  {
    path: '/sMain/password',
    meta: {
      title: '修改密码'
    },
    component:password,
  },
  {
    path: '/sMain/personInform',
    meta: {
      title: '查看个人信息'
    },
    component:personInform,
  },
]





const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass:'active',
  routes
})





router.beforeEach((to, from, next) => {
  if(to.path===from.path&&(to.path!=='/'&&from.path!=='/')){}else{
    document.title=to.meta.title
    if(to.path.includes('/sMain')&&store.getters.ClassView.length===0){
      const data={specialty:sessionStorage.getItem('Specialty'),account:sessionStorage.getItem('Account')}
      store.dispatch('getList',data).then(res=>[
        next()
      ])
    }else{
      next()
    }
  }
})




/*
* 解决重复点击菜单控制台报错
* */
//push
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default router
