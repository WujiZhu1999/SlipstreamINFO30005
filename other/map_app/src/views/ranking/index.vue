<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.replace({ name: 'person' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="map-header-title">{{$route.meta.title}}</div>
    </div>
    <div class="map-content">
      <h3>Weekly Best Sellers</h3>
      <Item v-for="(item,index) in list" :key="item._id" :data="item" :index="index+1" />
    </div>
  </div>
</template>

<script>
import Item from './Item'
export default {
  components: { Item },
  data () {
    return {
      list: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    //获取排行榜前50
    async getList () {
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.user_ranking
        })
        this.list = data.map(item => {
          return {
            ...item,
            _id: item._id.uid,
            nickname: item._id.nickname,
            headImage: item._id.headImage
          }
        })
      } finally {
        this.$toast.clear(true)
      }
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
h3 {
  font-size: 16px;
  margin-bottom: 15px;
}
</style>
