<template>
    <div>
      <h2>我是用户界面</h2>
      <p>我是用户的相关信息，嘿嘿</p>
      <h2>我是路由动态获取的id：{{userId}}</h2>
      <button @click="bthClick">按钮</button>
    </div>
</template>

<script>
    export default {
        name: "user",
      computed:{
          userId(){
            //动态获取路由，哪个路由处于活跃状态，就获取哪个路由
            return this.$route.params.id
          }
      },
      methods:{
        bthClick(){
          // $router和$route的区别：router是路由栈，route是当前活跃的路由节点，所有的组件都继承自vue的原型
          // console.log(this.$router)
          // console.log(this.$route)
        }
      }
    }
</script>

<style scoped>

</style>
