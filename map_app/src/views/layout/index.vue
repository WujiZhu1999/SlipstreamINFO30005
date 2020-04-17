<template>
  <div class="tab-home">
    <div class="tab-body">
      <router-view></router-view>
    </div>
    <van-tabbar v-model="active" @change="change">
      <van-tabbar-item name="map">Route</van-tabbar-item>
      <van-tabbar-item name="search">Search</van-tabbar-item>
      <van-tabbar-item name="forum">Posts</van-tabbar-item>
      <van-tabbar-item name="active">Active </van-tabbar-item>
      <van-tabbar-item name="person">Person</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: this.$route.name
    }
  },
  watch: {
    $route() {
      this.active = this.$route.name
    }
  },
  created() {
  },
  methods: {
    change(e) {
      this.$router.push({ name: e })
    }
  }
}
</script>

<style lang="less" scoped>
.tab-home {
  height: 100%;
  padding-bottom: 1.33333rem;
}
.tab-body {
  height: 100%;
  overflow-y: auto;
}
</style>