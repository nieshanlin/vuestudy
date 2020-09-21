<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"> <slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :class="{active:isActive}"><slot name="item-text"></slot></div>

  </div>

</template>

<script>
    export default {
        name: "TabBarItem",
      props:{
         path:String
      },
      data(){
          return{
            // isActive:true
          }
      },
      computed:{
        isActive(){
          //判断当前活跃的路由和传过来的路由是不是一致的，然后返回，是就是true
          return this.$route.path.indexOf(this.path)!==-1
        }
      },
      methods:{
        itemClick(){
        // 路由跳转
          this.$router.replace(this.path)
        }
      }
    }
</script>

<style scoped>

  .tab-bar-item{
    flex: 1;
    text-align: center;
    /*tab-bar常用高度49*/
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item img{
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .active{
    color:deeppink;
  }
</style>
