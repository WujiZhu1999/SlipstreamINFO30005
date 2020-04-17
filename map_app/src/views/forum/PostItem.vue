<template>
  <div class="post">
    <p class="header">{{item.user && item.user.nickname}}<i></i>{{ item.createdAt | dateFormat }}</p>
    <h3 class="text-ellipsis">{{item.title}}</h3>
    <div class="post-content">
      <span v-if="!isMyposts">
        <van-icon name="good-job" />
        <span>{{item.agreeNum}}</span>
      </span>
      <span v-if="!isMyposts">
        <van-icon name="comment" />
        <span>{{item.commentNum}}</span>
      </span>
      <span @click.stop="onDeleteConfirm" v-if="isMyposts" class="action">
        <van-icon name="delete" />
      </span>
      <span @click.stop="$router.push({name:'postEdit',query:{_id:item._id}})" v-if="isMyposts" class="action">
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
  methods: {
    async onDeleteConfirm () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'confirm deletion?'
      }).then(() => {
        this.$emit('delete', this.item)
      }).catch(() => {
        // on cancel
      });
    },

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
  .tag {
    color: #0084ff;
    background: rgba(0, 132, 255, 0.1);
    border-color: transparent;
    line-height: 1;
    padding: 0 8px;
    font-size: 12px;
  }
  p {
    font-size: 12px;
    color: #1a1a1a;
  }
}
</style>
