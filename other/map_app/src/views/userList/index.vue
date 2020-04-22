<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.replace({ name: 'person' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="map-header-title">{{$route.query.type}}</div>
    </div>
    <div class="map-content">
      <template v-if="$route.query.type==='Follow'">
        <Item @updateList="getList()" v-for="item in followList" :key="item._id" :data="item.friend" :status="item.status" />
      </template>
      <template v-else>
        <Item @updateList="getList()" v-for="item in fansList" :key="item._id" :data="item.me" :status="item.status" />
      </template>
    </div>
  </div>
</template>

<script>
import Item from './Item'
export default {
  components: { Item },
  data () {
    return {
      followTotal: 0,
      fansTotal: 0,
      followList: [],
      fansList: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    async onDeleteItem ({ _id, article }) {
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.comment_remove,
          params: {
            _id,
            article
          }
        })
        this.getComments()
        setTimeout(() => {
          this.$toast("delete success")
        })
      } finally {
        this.$toast.clear(true)
      }
    },
    //获取粉丝关注列表
    async getList () {
      const { data } = await this.$http({
        url: this.$api.user_fans,
        method: "post",
        data: {
          me: this.$store.getters.user._id
        }
      })
      this.followTotal = data.followTotal
      this.fansTotal = data.fansTotal
      this.followList = data.followList
      this.fansList = data.fansList
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
</style>
