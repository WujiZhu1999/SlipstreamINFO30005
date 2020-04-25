<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.replace({ name: 'person' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="map-header-title">{{ $route.meta.title }}</div>
    </div>
    <div class="map-content">
      <h3>Route distance statistics of this week</h3>
      <canvas :width="width" :height="height" id="container"></canvas>
    </div>
  </div>
</template>

<script>
import F2 from '@antv/f2'
import moment from 'moment'
export default {
  data () {
    return {
      list: [],
      width: window.innerWidth - 30,
      height: 200
    }
  },
  created () {
    this.getList()
  },
  methods: {
    //获取
    async getList () {
      try {
        this.$toast.loading({
          duration: 0
        })
        let weeks = Array.from({
          length: 7
        }).map((_, index) => {
          return moment()
            .weekday(index + 1)
            .format('YYYY-MM-DD')
        })
        const { data } = await this.$http({
          url: this.$api.user_week_report
        })
        weeks = weeks.map(item => {
          const isFind = data.find(d => d._id === item)
          if (isFind) {
            return {
              date: item,
              value: isFind.distance_total
            }
          }
          return {
            date: item,
            value: 0
          }
        })
        this.$nextTick(() => {
          this.init(weeks)
        })
      } finally {
        this.$toast.clear(true)
      }
    },
    init (data) {
      const chart = new F2.Chart({
        id: 'container',
        pixelRatio: window.devicePixelRatio,
        // window: window.innerWidth
      })

      chart.source(data, {
        date: {
          type: 'timeCat',
          range: [0, 1],
          tickCount: 3
        }
      })
      chart.tooltip({
        custom: true,
        showXTip: true,
        showYTip: true,
        snap: true,
        crosshairsType: 'xy',
        crosshairsStyle: {
          lineDash: [2]
        }
      })
      chart.axis('date', {
        label: function label (text, index, total) {
          const textCfg = {}
          if (index === 0) {
            textCfg.textAlign = 'left'
          } else if (index === total - 1) {
            textCfg.textAlign = 'right'
          }
          return textCfg
        }
      })
      chart.line().position('date*value')
      chart.render()
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
