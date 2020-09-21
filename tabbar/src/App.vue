<template>
  <div id="app">
    <router-view></router-view>
  <Tabbar>
    <tab-bar-item path="/home">
<!--      使用~别名设置可以在build下的webpack.base.conf.js中的resolve改变，就可以不用相对路径了，改完要从新运行项目-->
      <img slot="item-icon" src="~assets/img/tabbar/home.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img slot="item-icon" src="~assets/img/tabbar/Category.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/Category-active.png" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/shopcart">
      <img slot="item-icon" src="~assets/img/tabbar/shop-cart.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/shopcart-active.png" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img slot="item-icon" src="~assets/img/tabbar/profile.png" alt="">
      <img slot="item-icon-active" src="~assets/img/tabbar/home-active.png" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>

  </Tabbar>

  </div>
</template>

<script>
  import Tabbar from "components/tabbar/Tabbar";
  import TabBarItem from "components/tabbar/TabBarItem";
export default {
  name: 'App',
  components:{
    Tabbar,
    TabBarItem
  }
}
</script>

<style>
  @import "assets/css/base.css";
</style>
