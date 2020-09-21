<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/Home/homenews"  replace>新闻</router-link>
    <router-link to="/Home/homemessage"  replace>消息</router-link>
<!--    首页显示子路由-->

    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "Home",
      //创建
      created() {
          console.log('created')
      },
      //销毁
      destroyed() {
        console.log('destroyed');
      },
      //这两个函数只有该组件被保持了状态使用了keep-alive，才是有效的
      activated() {
        console.log('活跃的状态');
      },
      deactivated() {
        console.log('不活跃的状态');
      }
    }
</script>

<style scoped>

</style>


