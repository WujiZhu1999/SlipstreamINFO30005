<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.replace({ name: $route.query.back? $route.query.back:'forum' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="map-header-title">{{$route.meta.title}}</div>
      <div class="action">
        <van-icon @click="onAgree" name="good-job" style="margin-right:5px;" :color="data.isAgree ? '#0084ff' : '#b2bac2'" />
        <van-icon v-if="data.user && (data.user._id !== user._id) " @click="onFollow" name="friends" :color="data.isFollow ? '#0084ff' : '#b2bac2'" />
      </div>
    </div>
    <div class="map-content">
      <div class="user">
        <h4>{{ data.user && data.user.nickname }}</h4>
        <span>{{ data.createdAt | dateFormat }}</span>
      </div>
      <div class="content" v-html="data.content"></div>
      <h4 class="comment-title">
        Comments
        <span class="user-num">
          <van-icon name="comment" />
          <span>{{data.commentNum}}</span>
        </span>
      </h4>
      <CommentItem v-for="item in comments" :key="item._id" :data="item" />
      <div class="comment-input">
        <input v-model="commentText" placeholder="Please enter comments" maxlength="150">
        <span @click="onSendComment">SEND</span>
      </div>
    </div>
  </div>
</template>

<script>
import CommentItem from './CommentItem'
export default {
  components: { CommentItem },
  data () {
    return {
      data: {},
      comments: [],
      commentText: ""
    }
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  created () {
    this.getInfo()
    this.getComments()
  },
  methods: {
    //点赞 取消点赞
    async onAgree () {
      try {
        this.$toast.loading({
          duration: 0
        })
        await this.$http({
          url: this.$api.article_agree,
          method: 'post',
          data: {
            articleId: this.$route.query._id
          }
        })
        await this.getInfo()
        setTimeout(() => {
          if (this.data.isAgree) {
            this.$toast("agree successful")
          } else {
            this.$toast("cancel agree successful")
          }
        })
      } finally {
        this.$toast.clear(true)
      }
    },
    //关注 取消关注
    async onFollow () {
      try {
        this.$toast.loading({
          duration: 0
        })
        const { user } = this.$store.getters
        await this.$http({
          url: this.data.isFollow ? this.$api.follow_remove : this.$api.follow,
          method: 'post',
          data: {
            me: user._id,
            friend: this.data.user._id
          }
        })
        await this.getInfo()
        setTimeout(() => {
          if (this.data.isFollow) {
            this.$toast("follow successful")
          } else {
            this.$toast("cancel follow successful")
          }
        })
      } finally {
        this.$toast.clear(true)
      }
    },
    async getInfo () {
      if (!this.$route.query._id) return
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.article_info,
          params: {
            _id: this.$route.query._id
          }
        })
        this.data = data
      } finally {
        this.$toast.clear(true)
      }
    },
    //获取评论列表
    async getComments () {
      const { data } = await this.$http({
        url: this.$api.comment,
        params: {
          article: this.$route.query._id
        }
      })
      this.comments = data;
    },
    //发送评论
    async onSendComment () {
      if (!this.commentText.length) {
        return this.$toast("Please enter comments")
      }
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.comment_create,
          method: "post",
          data: {
            article: this.$route.query._id,
            content: this.commentText
          }
        })
        this.commentText = ""
        setTimeout(() => {
          this.$toast("Comment success")
          this.getComments()
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
.user-num {
  display: flex;
  align-items: center;
  color: #999;
}
.content {
  padding: 15px 0;
  font-size: 14px;
  color: #333;
}
.user {
  font-weight: 700;
  color: #333;
  font-size: 14px;
  span {
    font-size: 12px;
    color: #999;
    margin-right: 10px;
    font-weight: 400;
  }
}
.comment-title {
  font-size: 14px;
  border-top: 1px solid #e0e0e0;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  i {
    font-size: 18px;
  }
}
.comment-input {
  border-bottom: 1px solid #e0e0e0;
  margin-bottom: -20px;
  display: flex;
  align-items: center;
  span {
    padding: 4px 8px;
    color: #fff;
    background: #1890ff;
    font-size: 12px;
    border-radius: 4px;
    &:active {
      opacity: 0.7;
    }
  }
}
.comment-input input {
  font-size: 14px;
  height: 38px;
  line-height: 1;
  display: block;
  flex: 1;
}
.map-wrap .left-icon {
  display: flex;
  align-items: center;
}
</style>
