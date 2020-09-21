<template>
  <div id="app">
<!--    router-link是路由注册的全局组件，to是相当于a标签,tag可以改变属性，button，li等等，添加replace可以防止
浏览器页面返回跳转-->
    <router-link to="/Home" tag="button" replace>首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>
<!--    第二种跳转传参,query传递参数-->
    <router-link :to="{path:'/profile',query:{name:'nsl',age:18}}" tag="button" replace>档案</router-link>
<!--动态获取路由-->
    <router-link :to="'/user/'+userId" tag="button" replace>用户</router-link>
<!--    通过代码方式修改路由-->
    <button @click="homeclick">路由首页跳转</button>
    <button @click="aboutclick">路由关于跳转</button>
<!--    router-view是占位符，会将路由东西显示在这里-->
<!--    keep-alive是缓存当前页面，跳转时不重新请求，使其生命周期不被销毁，减少服务器压力-->
<!--  keep-alive的exclude被匹配的组件不会被缓存，include被匹配的组件会被缓存,排他属性，exclude=’profile，user‘排除profile，user不进行缓存-->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      userId:'张三'
    }
  },
  methods:{
    homeclick(){
    this.$router.push({
      path:'/Home',
      query:{
        name:'我是代码通过路由跳转传过来的参数'
      }
    })
    },
    aboutclick(){
      this.$router.push('/about')
    }
  }
}
</script>

<style>

</style>
