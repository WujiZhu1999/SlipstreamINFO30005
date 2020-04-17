<template>
  <div class="map-wrap">
    <div class="map-header">
      <div v-if="isMyposts" class="left-icon" @click="$router.push({ name: 'person' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="input-wrap">
        <input v-model="title" placeholder="Search title" />
      </div>
      <div class="action">
        <van-icon name="search" @click="onSearch" style="margin-right:10px" />
        <van-icon v-if="!isMyposts" name="plus" @click="$router.push({ name: 'post' })" />
      </div>
    </div>
    <div class="map-content">
      <div ref="list" style="overflow-y: auto;height:100%;">
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" style="position: relative;" pulling-text="Pull down to refresh..." loosing-text="Release to refresh..." loading-text="loading...">
          <van-list v-model="loading" error-text="Request failed, click reload" :finished-text="data.length === 0 ? '' : 'No more'" loading-text="loading..." :error.sync="error" :finished="finished" @load="onLoad">
            <PostItem @click.native="
                $router.push({ name: 'postInfo', query: { _id: item._id ,back:$route.name} })
              " @delete="onDeleteItem" v-for="item in data" :key="item._id" :item="item" :isMyposts="isMyposts" />
          </van-list>
        </van-pull-refresh>
      </div>
    </div>
  </div>
</template>

<script>
import PostItem from './PostItem'
export default {
  components: { PostItem },
  data () {
    return {
      data: [],
      loading: false,
      finished: false,
      pageNo: 0,
      isAjax: false,
      error: false,
      isLoading: false,
      title: ""
    }
  },
  computed: {
    isMyposts () {
      return this.$route.name === 'myposts'
    }
  },
  methods: {
    onLoad () {
      if (this.isAjax) {
        return
      }
      this.isAjax = true
      this.pageNo++
      this.list(false, false)
    },
    async onRefresh () {
      this.isAjax = true
      try {
        this.pageNo = 1
        this.finished = false
        await this.list(true)
      } finally {
        setTimeout(() => {
          this.isLoading = false
          this.isAjax = false
        }, 300)
      }
    },
    async onDeleteItem ({ _id }) {
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.article_remove,
          params: {
            _id,
          }
        })
        this.onSearch()
        setTimeout(() => {
          this.$toast("delete success")
        })
      } finally {
        this.$toast.clear(true)
      }
    },
    async onSearch () {
      if (this.isAjax) {
        return
      }
      this.isAjax = true
      this.pageNo = 1
      this.finished = false
      try {
        await this.list(true)
      } finally {
        this.isAjax = false
      }
    },
    async list (flag, isToast = true) {
      try {
        isToast &&
          this.$toast.loading({
            duration: 0
          })
        const { data } = await this.$http({
          url: this.$api.article_list,
          params: {
            pageNo: this.pageNo,
            title: this.title,
            isUser: this.isMyposts ? true : undefined
          }
        })
        let list = data.rows || []
        if (flag) {
          this.data = list
          this.$nextTick(() => {
            this.$refs.list.scrollTop = 0
          })
        } else {
          this.data = this.data.concat(list)
        }
        this.pageNo = data.pageNo
        if (list.length !== data.size) {
          this.finished = true
        }
      } catch (e) {
        this.error = true
        this.pageNo--
      } finally {
        isToast && this.$toast.clear(true)
        this.isLoad = true
        this.$nextTick(() => {
          this.isAjax = false
          this.loading = false
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import "../home/header.less";

.map-wrap {
  background-color: #f0f3f6;
  .map-content {
  }
  .map-header {
    padding: 10px 15px;
    .left-icon {
      display: flex;
      align-items: center;
    }
    .input-wrap {
      height: 34px;
    }
    .action {
      display: flex;
      align-items: center;
    }
  }
}
</style>
