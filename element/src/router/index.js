import Vue from 'vue'
import VueRouter from 'vue-router'
import ListArticle from "../views/ListArticle";
import CreateArticle from "../views/CreateArticle";
import EditArticle from "../views/EditArticle";
Vue.use(VueRouter)
//防止两次点击路由报错
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

  const routes = [
  {
    path: '/',
    name: 'Home',
    redirect:'/articles/index',

  },
    {
      path: '/articles/index',
      name: 'ListArticle',
      component:ListArticle
    },
  {
    path: '/articles/create',
    name: 'CreateArticle',
    component:CreateArticle
  },
    {
      path: '/articles/:id/edit',
      name: 'edit-article',
      component:EditArticle
    },
]

const router = new VueRouter({
  routes
})

export default router
