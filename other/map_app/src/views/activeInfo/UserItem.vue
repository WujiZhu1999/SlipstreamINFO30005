<template>
  <div class="comment-item">
    <div class="left">
      <img :src="data.headImage" alt="">
    </div>
    <div class="right">
      <div class="text">{{data.nickname}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  }
}
</script>

<style lang="less" scoped>
.comment-item {
  display: flex;
  margin-bottom: 15px;
  .left {
    width: 35px;
    height: 35px;
    overflow: hidden;
    border-radius: 35px;
    img {
      width: 35px;
      height: 35px;
      display: block;
      background-color: #f0f0f0;
    }
  }
  .right {
    flex: 1;
    padding-left: 15px;
    overflow: hidden;
    display: flex;
    align-items: center;
    .user {
      color: #999;
      font-size: 12px;
      line-height: 22px;
    }
    .text {
      color: #333;
      font-size: 16px;
      font-weight: 700;
      white-space: pre-wrap;
      word-break: break-all;
      flex: 1;
      overflow: hidden;
      display: flex;
      align-items: center;
      padding-right: 15px;
    }
  }
}
</style>