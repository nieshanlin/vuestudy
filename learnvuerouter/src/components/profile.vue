<template>
    <div>
      <h2>我是profile</h2>
      使用$route当前路由取出query里面的后缀参数的值
      <h2>{{$route.query}}</h2>
    </div>
</template>

<script>
    export default {
        name: "profile",

    }
</script>

<style scoped>

</style>
