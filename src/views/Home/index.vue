<template>
  <div>
    <router-view />
    <van-tabbar
      class="footer"
      v-model="active"
      fixed
      z-index="3"
      route
      @change="onChange"
      placeholder
    >
      <van-tabbar-item icon="home-o" to="/index">主页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" dot to="/list">校园文化</van-tabbar-item>
      <van-tabbar-item icon="contact" dot to="/my">登录</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      // 当前选中项
      active: 0,
      // 购物车数量
      badge: this.total
    }
  },
  computed: {
  },
  methods: {
    // 导航栏切换
    onChange (item) {
      this.active = item
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  position: fixed;
  bottom: 0;
}
</style>
