<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.replace({ name: 'person' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="input-wrap">
        <input v-model="title" placeholder="Please enter user nickname" />
      </div>
      <div class="action">
        <van-icon name="search" @click="onSearch" style="margin-right:10px" />
      </div>
    </div>
    <div class="map-content">
      <Item @updateList="getList()" v-for="item in list" :key="item._id" :data="item" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
export default {
  components: { Item },
  data () {
    return {
      title: "",
      list: []
    }
  },
  created () {

  },
  methods: {
    async onSearch () {
      if (this.title) {
        await this.getList()
      } else {
        this.$toast("Please enter user nickname")
      }
    },
    //获取用户列表
    async getList () {
      const { data } = await this.$http({
        url: this.$api.user_query,
        params: {
          nickname: this.title
        }
      })
      this.list = data
    }
  }
}
</script>

<style lang="less" scoped>
@import "../home/header.less";
.map-wrap .left-icon {
  display: flex;
  align-items: center;
}
.map-wrap .map-header .input-wrap {
  height: 34px;
}
.map-wrap .map-header {
  height: 54px;
  display: flex;
  align-items: center;
}
.map-wrap .map-content {
  padding: 20px;
  overflow-y: auto;
}
.content {
  padding: 15px 0;
  font-size: 14px;
  color: #333;
}
</style>
