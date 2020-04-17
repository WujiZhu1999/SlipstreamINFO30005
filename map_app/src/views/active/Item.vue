<template>
  <div class="post">
    <p class="header">{{item.promoter && item.promoter.nickname}}<span v-if="item.promoter._id === user._id" class="tag">ME</span><span class="tag">{{status[1]}}</span></p>
    <p class="header">start date: {{ item.startDate | dateFormat }}</p>
    <p class="header">end date: {{ item.endDate | dateFormat }}</p>
    <h3 class="text-ellipsis">{{item.title}}</h3>
    <div class="user-list" v-if="item.enlist.length">
      <template v-for="(u,index) in item.enlist">
        <img v-if="index<5" :key="u._id" :src="u.headImage" :style="{zIndex:index+1,left:index*-10+'px'}">
      </template>
      <span v-if="item.enlist.length>=5">More</span>
    </div>
    <div class="post-content">
      <span @click.stop="onAddActive" class="action" v-if="user._id !==item.promoter._id && !isJoin &&status[0]!==2">
        <van-icon name="plus" />
      </span>
      <span v-if="isJoin && status[0]!==2" @click.stop="onDeleteConfirm" class="action">
        <van-icon name="cross" />
      </span>
      <span @click.stop="onDeleteActiveConfirm" v-if="isMyposts" class="action">
        <van-icon name="delete" />
      </span>
      <span @click.stop="$router.push({name:'editActive',query:{_id:item._id}})" v-if="isMyposts" class="action">
        <van-icon name="edit" />
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
    isMyposts: Boolean
  },
  computed: {
    user () {
      return this.$store.getters.user
    },
    isJoin () {
      return !!this.item.enlist.find(item => item._id === this.user._id)
    },
    status () {
      const start = +new Date(this.item.startDate)
      const end = +new Date(this.item.endDate)
      const now = +new Date()
      //未开始
      if (start >= now) {
        return [0, "Not yet begun"]
      }
      //一结束
      if (now >= end) {
        return [2, "Has ended"]
      }
      //活动中
      return [1, "In activity"]
    }
  },
  methods: {
    //删除活动
    async onDeleteActiveConfirm () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'confirm deletion?'
      }).then(async () => {
        try {
          this.$toast.loading({
            duration: 0
          })
          await this.$http({
            url: this.$api.active_delete,
            params: {
              _id: this.item._id
            }
          })
          setTimeout(() => {
            this.$toast("delete in success")
          })
          this.$emit('update')
        } finally {
          this.$toast.clear(true)
        }
      }).catch(() => {
        // on cancel
      });
    },
    // 取消活动
    async onDeleteConfirm () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'exit activities?'
      }).then(async () => {
        try {
          this.$toast.loading({
            duration: 0
          })
          await this.$http({
            url: this.$api.active_user_del,
            method: 'post',
            data: {
              _id: this.item._id
            }
          })
          setTimeout(() => {
            this.$toast("exit in success")
          })
          this.$emit('update')
        } finally {
          this.$toast.clear(true)
        }
      }).catch(() => {
        // on cancel
      });
    },
    async onAddActive () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'confirm to join the activity?'
      }).then(async () => {
        try {
          this.$toast.loading({
            duration: 0
          })
          await this.$http({
            url: this.$api.active_user_add,
            method: 'post',
            data: {
              _id: this.item._id
            }
          })
          setTimeout(() => {
            this.$toast("join in success")
          })
          this.$emit('update')
        } finally {
          this.$toast.clear(true)
        }
      }).catch(() => {
        // on cancel
      });
    }
  }
}
</script>

<style lang="less" scoped>
.post {
  padding: 10px 15px;
  background: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  .header {
    color: #b2bac2;
    font-size: 12px;
    margin-bottom: 5px;
    position: relative;
    height: 20px;
    line-height: 20px;
    i {
      &::after {
        content: "·";
        color: rgb(178, 186, 194);
        margin: 0px 0.4em;
      }
    }
  }
  h3 {
    font-weight: 600;
    line-height: 1.2;
    color: #2e3135;
    margin-bottom: 5px;
    font-size: 14px;
  }
  .post-content {
    font-size: 12px;
    color: #b2bac2;
    display: flex;
    align-items: center;
    > span {
      display: inline-block;
      display: flex;
      align-items: center;
      padding: 0 10px;
      color: #b2bac2;
      border-radius: 1px;
      border: 1px solid #edeeef;
      > span {
        font-weight: 600;
        margin-left: 5px;
      }
    }
    > .action {
      padding-top: 4px;
      padding-bottom: 4px;
      font-size: 16px;
    }
    > span:last-child {
      margin-left: -1px;
    }
  }
  p {
    font-size: 12px;
    color: #1a1a1a;
  }
}
.user-list {
  display: flex;
  align-items: center;
  padding: 8px 0;
  img {
    position: relative;
    width: 25px;
    height: 25px;
    border-radius: 25px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
  span {
    font-size: 12px;
    text-decoration: underline;
  }
}
.tag {
  padding: 4px 8px;
  color: #fff;
  background: #1890ff;
  font-size: 12px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  margin-left: 10px;
  line-height: 1;
  &:active {
    opacity: 0.7;
  }
}
</style>
