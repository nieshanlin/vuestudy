// vuex的管理文件
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";
import moduleA from "./modules/moduleA";
// 1.安装插件
Vue.use(Vuex)
const state={
// 保存状态
  counter:1000,
  students:[
    {id:110,name:'why',age:18},
    {id:111,name:'qqq',age:25},
    {id:112,name:'aaa',age:38},
    {id:113,name:'ooo',age:26}
  ],
  info:{
    name:'校园',
    age:41,
    height:33
  }
}
//2.创建对象,有且只有一个
const store= new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  modules:{
//对一些东西进行抽离重新定义,使其他模块不那么臃肿
    a:moduleA
 },

})
//3.导出
export default store
