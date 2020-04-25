<template>
  <div class="comment-item">
    <div class="left">
      <img :src="data.user.headImage" alt="">
    </div>
    <div class="right">
      <div class="user">{{data.user && data.user.nickname}}</div>
      <div class="text">{{data.content}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
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
    .user {
      color: #999;
      font-size: 12px;
      line-height: 22px;
    }
    .text {
      color: #333;
      font-size: 13px;
      white-space: pre-wrap;
      word-break: break-all;
    }
  }
}
</style>