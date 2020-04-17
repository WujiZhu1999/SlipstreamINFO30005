<template>
  <div class="post">
    <p class="header">date: {{ item.createdAt | dateFormat }}</p>
    <p class="header">origin: {{ item.originName }}</p>
    <p class="header">destination: {{ item.destinationName }}</p>
    <h3 class="text-ellipsis">{{item.distance}} km</h3>
    <div class="post-content">
      <span @click.stop="onDeleteConfirm" class="action">
        <van-icon name="delete" />
      </span>
      <!-- @click.stop="$router.push({name:'share',query:{_id:item._id}})" -->
      <span @click.stop="onShare" class="fb-share-button action" data-href="https://developers.facebook.com/docs/plugins/" data-layout="button_count">
        <a target="_blank" :href="getUrl()" class="fb-xfbml-parse-ignore" style="font-size:0;color:#999;line-height:1">
          <van-icon style="font-size:0.42667rem" name="exchange" /></a>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  },
  methods: {
    getUrl () {
      const url = encodeURIComponent(window.location.protocol + "//" + window.location.host + "/#/share?_id=" + this.item._id)
      return `https://www.facebook.com/sharer/sharer.php?u=${url}&amp;src=sdkpreparse`
    },
    //删除
    async onDeleteConfirm () {
      this.$dialog.confirm({
        title: 'Message',
        message: 'confirm deletion?'
      }).then(async () => {
        try {
          this.$toast.loading({
            duration: 0
          })
          await this.$http({
            url: this.$api.user_route_delete,
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
    onShare () {

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
</style>
