import Vue from 'vue'
import Router from 'vue-router'
const Home=()=>import('../views/home/home')
const category=()=>import('../views/category/category')
const profile=()=>import('../views/profile/profile')
const shopcart=()=>import('../views/shopcart/shopcart')


Vue.use(Router)
// 创建路由对象
const routes=[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/category',
    component:category,
  },
  {
    path: '/home',
    component:Home,
  },{
    path: '/profile',
    component:profile,
  },
  {
    path: '/shopcart',
    component:shopcart,
  }
]
const router=new Router({
  routes,
  mode:'history'
})
export default router
