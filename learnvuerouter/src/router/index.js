//配置路由相关的知识
import Vue from 'vue'
import Router from 'vue-router'
//导入components
// import Home from "../components/Home";
// import about from "../components/about";
// import user from "../components/user";
// 路由实现懒加载
const Home=()=>import('../components/Home')
const homenews=()=>import('../components/homenews')
const homemessage=()=>import('../components/homemessage')
const about=()=>import('../components/about')
const user=()=>import('../components/user')
const profile=()=>import('../components/profile')
//1.通过Vue.use(插件），安装vue-router插件，执行Router.install方法
Vue.use(Router)
//创建vuerouter对象
export default new Router({
  //3.将router对象传入到vue中，然后导出
  routes: [
    {
      path: '/',
    //  redirect重定向到首页
      redirect:'/Home',

    },
    {
      path: '/about',
      component:about,
      meta:{
        title:'关于'
      }
    },
    {
      path: '/Home',
      component:Home,
      // 实现路由嵌套
      children:[
        {
          path: '',
          redirect:'homenews'
        },
        {
          path:'homenews',
          component:homenews
        },{
          path:'homemessage',
          component:homemessage
        }
      ],
      meta:{
        title:'首页'
      }
    },
    {
      path: '/user/:id',
      component:user
    },{
      path: '/profile',
      component:profile,
      meta:{
        title:'档案'
      }
    }

  ],
  //去掉浏览器中的#号，让哈希模式改为history模式
  mode:'history'

})
// 导航守卫动态获取网页跳转的标题：前置守卫
// Router.beforeEach((to,from,next)=>{
//   //从from跳转到to
//   document.title=to.name
//   next()
// })
// 后置钩子
// Router.afterEach((to,from)=>{
//   console.log('lal')
// })
