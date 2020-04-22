<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="left-icon" @click="$router.push({ name: 'myroute' })">
        <van-icon name="arrow-left" />
      </div>
      <div class="input-wrap">
        <input v-model="start" placeholder="" disabled />
        <input v-model="end" placeholder="" disabled />
      </div>
      <div class="action">
        <div>
          <van-icon @click.native="onLocation" name="location-o" />
        </div>
      </div>
    </div>
    <div class="map-info" v-if="routes[routeIndex]">
      <div>
        <van-icon name="peer-pay" /> Whole length
        <span style="color:#1989fa">{{
          routes[routeIndex].legs[0].distance.text
        }}</span>
      </div>
      <div>
        <van-icon name="tosend" /> Required time
        <span style="color:#1989fa">{{
          routes[routeIndex].legs[0].duration.text
        }}</span>
      </div>
      <div>
        <van-icon name="circle" /> Intersection number
        <span style="color:#1989fa">{{
          routes[routeIndex].legs[0].steps.length
        }}</span>
      </div>
      <div>
        <van-icon name="other-pay" /> Proportion of bicycle lanes
        <span style="color:#1989fa">{{
          getBicycle(routes[routeIndex].legs[0].steps)
        }}</span>
      </div>
      <div>
        <van-icon name="award-o" />
        {{
          ((routes[routeIndex].legs[0].distance.value * 0.3) / 1000).toFixed(2)
        }}%of trees you saved
      </div>
      <div>
        <span @click.stop="onShowViewBike" style="color:rgb(25, 137, 250)">view bike path</span>
      </div>
    </div>
    <div class="map-content">
      <googlemaps-map
        ref="map"
        class="map"
        :center.sync="center"
        :zoom.sync="zoom"
        style="height:100%"
      >
        <googlemaps-user-position @update:position="setUserPosition" />
      </googlemaps-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      start: '',
      end: '',
      center: { lat: -37.7997615, lng: 144.9637097 },
      options: {},
      zoom: 18,
      userPosition: null,
      routes: [],
      routeIndex: 0,
      currentRoute: {}
    }
  },
  created() {
    this.directionsRendererList = []
  },
  mounted() {
    this.getLocation()
    this.init()
  },
  methods: {
    async init() {
      const { google } = window
      this.map = await this.$refs.map.$_getMap()
      this.getCurrentRoute()
      this.directionsRendererList = []
    },
    onShowViewBike() {
      const { google } = window
      if (this.bikeLayer) {
        this.bikeLayer.setMap(null)
        this.bikeLayer = null
      } 
      const bikeLayer = new google.maps.BicyclingLayer()
      bikeLayer.setMap(this.map)
      this.bikeLayer = bikeLayer
    },
    setUserPosition(position) {
      this.userPosition = position
    },
    clearDirectionsRenderer() {
      this.directionsRendererList.map(item => {
        item.setMap(null)
      })
      this.directionsRendererList = []
    },
    //开始导航
    onLocation() {
      if (!this.start) {
        return this.$toast('Please enter the starting position')
      }
      if (!this.end) {
        return this.$toast('Please enter the destination location')
      }
      /**
       *  IOS：safari浏览器，google浏览器，UC浏览器可用QQ浏览器无法使用
          Android：只有google浏览器可以打开谷歌地图
       * 
       */
      window.location.href =
        'https://www.google.com/maps/dir/?api=1&origin=' +
        this.urlreplace(this.start) +
        '&destination=' +
        this.urlreplace(this.end) +
        '&travelmode=bicycling'
    },
    urlreplace(str) {
      return encodeURIComponent(str).replace(/%20/g, '+')
    },
    getBicycle(arr) {
      const len = arr.length
      const bicyLen = arr.filter(item => item.travel_mode === 'BICYCLING')
        .length
      return ((bicyLen / len) * 100).toFixed(2) + '%'
    },
    //地图开始结束位置选点
    calculateAndDisplayRoute(origin, destination, renderOne = false) {
      return new Promise(re => {
        const { google } = window
        console.log(origin, destination)
        if (!this.directionsService) {
          this.directionsService = new google.maps.DirectionsService()
        }
        this.directionsService.route(
          {
            origin,
            destination,
            travelMode: google.maps.TravelMode.BICYCLING,
            provideRouteAlternatives: true,
            region: 'au'
          },
          (response, status) => {
            console.log(response)
            if (status == 'OK') {
              this.response = response
              this.clearDirectionsRenderer()
              this.directionsRendererList = []
              //只渲染当前路线的那一条
              if (renderOne) {
                for (let i = 0; i < response.routes.length; i++) {
                  if (i === this.routeIndex) {
                    const directionsRenderer = new google.maps.DirectionsRenderer()
                    directionsRenderer.setMap(this.map)
                    directionsRenderer.setDirections(response)
                    directionsRenderer.setOptions({
                      routeIndex: i,
                      polylineOptions: {
                        strokeOpacity: 0.6,
                        strokeColor: 'rgb(25, 137, 250)',
                        strokeWeight: 10
                      }
                    })
                    this.directionsRendererList.push(directionsRenderer)
                  }
                }
                this.routes = Object.freeze(response.routes)
              } else {
                //查询渲染所有跳
                for (let i = 0; i < response.routes.length; i++) {
                  const directionsRenderer = new google.maps.DirectionsRenderer()
                  directionsRenderer.setMap(this.map)
                  directionsRenderer.setDirections(response)
                  directionsRenderer.setOptions({
                    routeIndex: i,
                    polylineOptions: {
                      strokeOpacity: i === 0 ? 0.6 : 0.3,
                      strokeColor: 'rgb(25, 137, 250)',
                      strokeWeight: 10
                    }
                  })
                  this.directionsRendererList.push(directionsRenderer)
                }
                this.routes = Object.freeze(response.routes)
                this.routeIndex = 0
              }
            } else {
              this.$toast('Directions request failed due to ' + status)
            }
            re()
          }
        )
      })
    },
    //根据id获取骑行
    async getCurrentRoute() {
      try {
        this.$toast.loading({
          duration: 0
        })
        const { data } = await this.$http({
          url: this.$api.riding_byId,
          method: 'post',
          data: {
            _id: this.$route.query._id
          }
        })
        this.start = data.originName
        this.end = data.destinationName
        this.currentRoute = data || {}
        if (this.currentRoute._id && this.currentRoute.status !== 2) {
          this.routeIndex = this.currentRoute.routeIndex
          this.clearDirectionsRenderer()
          await this.calculateAndDisplayRoute(
            {
              placeId: this.currentRoute.origin
            },
            {
              placeId: this.currentRoute.destination
            },
            true
          )
        }
      } finally {
        this.$toast.clear(true)
      }
    },
    //获取当前地理位置
    getLocation() {
      const { navigator } = window
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          this.showPosition,
          this.showError
        )
      } else {
        this.$toast('Geolocation is not supported by this browser')
      }
    },
    showPosition(position) {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    },
    showError(error) {
      switch (error.code) {
        //将网址改为https
        case error.PERMISSION_DENIED:
          this.$toast('User denied the request for Geolocation.')
          break
        case error.POSITION_UNAVAILABLE:
          this.$toast('Location information is unavailable.')
          break
        case error.TIMEOUT:
          this.$toast('The request to get user location timed out.')
          break
        case error.UNKNOWN_ERROR:
          this.$toast('An unknown error occurred.')
          break
      }
    }
  }
}
</script>

<style lang="less" scoped>
@import '../home/header.less';
/deep/ .gm-fullscreen-control,
/deep/ .gmnoprint {
  display: none;
}
.map-wrap .map-header{
  z-index: 9999;
}
.center-icon {
  position: absolute;
  right: 10px;
  bottom: 10px;
  font-size: 30px;
  z-index: 9998;
  color: #888;
}
.map-info {
  background: #fff;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  font-size: 14px;
  position: relative;
  z-index: 99998;
  > div {
    display: flex;
    align-items: center;
    line-height: 2;
    > i {
      margin-right: 5px;
    }
    > span {
      margin-left: 5px;
    }
  }
  .lins {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
    display: flex;
    flex-direction: column;
  }
}
</style>
