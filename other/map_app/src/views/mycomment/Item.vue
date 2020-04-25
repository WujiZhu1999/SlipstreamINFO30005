<template>
  <div class="comment-item">
    <div class="left">
      <img :src="data.user.headImage" alt="">
    </div>
    <div class="right">
      <div class="text" @click="$router.push({name:'postInfo',query:{back:'mycomment',_id:data.article}})">{{data.content}}</div>
      <div class="user">
        <span @click.stop="onDeleteConfirm" class="action">
          <van-icon name="delete" />
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  },
  methods: {
    async onDeleteConfirm () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'confirm deletion?'
      }).then(() => {
        this.$emit('delete', this.data)
      }).catch(() => {
        // on cancel
      });
    },
  }
}
</script>

<style lang="less" scoped>
.comment-item {
  display: flex;
  margin-bottom: 15px;
  .left {
    width: 30px;
    height: 30px;
    overflow: hidden;
    border-radius: 30px;
    img {
      width: 30px;
      height: 30px;
      display: block;
      background-color: #f0f0f0;
    }
  }
  .right {
    flex: 1;
    padding-left: 15px;
    overflow: hidden;
    display: flex;
    .user {
      color: #999;
      font-size: 12px;
      line-height: 22px;
      width: 40px;
    }
    .text {
      color: #333;
      font-size: 13px;
      white-space: pre-wrap;
      word-break: break-all;
      flex: 1;
      overflow: hidden;
    }
  }
}
.action {
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 16px;
  display: inline-block;
  display: flex;
  align-items: center;
  padding: 4px 10px;
  color: #b2bac2;
  border-radius: 1px;
  border: 1px solid #edeeef;
  justify-content: center;
  > span {
    font-weight: 600;
    margin-left: 5px;
  }
}
</style>