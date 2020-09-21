import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
// axios({
//   url:'http://123.207.32.32:8000/home/multidata',
//   method:'get',
// // 专门针对get请求的参数拼接
//   params:{
//     type:'pop',
//     pages:1
//   }
// }).then(res=>{
//   console.log(res)
// })
// 全局配置
// axios.defaults.baseURL='http://123.207.32.32:8000/'
// 请求响应时间全局
// axios.defaults.timeout=5000
//2.axios发送并发请求
// axios.all([axios({
//   timeout:5,
//   url:'home/multidata'
//     }),axios({
//
//   url:'/home/data',
//   params:{
//   // 拼接，每次取多少条数据
//     type: 'sell',
//     page:4
//   }
// })])
//     .then(axios.spread((res1,res2)=>{
//       console.log(res1);
//       console.log(res2);
//     }))
// 创建axios实例,每个实例都有独立的配置
//  const instance1=axios.create({
//    baseURL:'http://123.207.32.32:8000/',
//    timeout:5000
//  })
// instance1({
//   url:'/home/multidata'
// }).then(res=>{
//   console.log(res);
// })
// instance1({
//   url:'/home/data',
//   params:{
//     type:'pop',
//     page:1
//   }
// }).then(res=>{
//   console.log(res);
// })
// const instance2=axios.create({
//   baseURL:'http://123.207.32.32:8000/',
//   timeout:10000,
//   // headers:{
//   //
//   // }
// })
// 使用封装的request的模块
import {request} from "./network/request";
// 第一种
// request({
//   url:'/home/multidata'
// },res=>{
//   console.log(res);
// },error=>{
//   console.log(error);
// })
// 第二种
// request({
//   baseConfig:{
//
//   },success:function (res) {
//
//   },
//   failure:function (err) {
//
//   }
// })
//第三种，很重要
request({
  url:'/home/multidata'
}).then(res=>{
  console.log(res);
}).catch(err=>{
  // console.log(err);
})