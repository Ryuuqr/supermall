<template>
    <tab-bar>
        <tab-bar-item path="/home">
        <img slot="item-icon" src="../../assets/img/homeNoClick.png">
        <img slot="item-icon-active" src="../../assets/img/home.png">
        <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/catagory">
        <img slot="item-icon" src="../../assets/img/classNoClick.png">
        <img slot="item-icon-active" src="../../assets/img/class.png">
        <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path="/cart">
        <img slot="item-icon" src="../../assets/img/shopCarNoClick.png">
        <img slot="item-icon-active" src="../../assets/img/shopCar.png">
        <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../assets/img/mineNoClick.png">
        <img slot="item-icon-active" src="../../assets/img/mine.png">
        <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
</template>

<script>
  import TabBar from '../common/tabbar/TabBar.vue'
  import TabBarItem from '../common/tabbar/TabBarItem.vue'
    
  export default {
    name: 'MainTabBar',
    components: {
        TabBar,
        TabBarItem
    }
  }
</script>

<style scoped>
    
</style>