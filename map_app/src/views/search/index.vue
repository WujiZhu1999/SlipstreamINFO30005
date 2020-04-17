<template>
  <div class="map-wrap">
    <div class="map-header">
      <div class="input-wrap">
        <input v-model="value" placeholder="valueing point">
      </div>
      <div class="action">
        <van-icon @click.native="onSearch" name="search" style="margin-right:10px" />
        <van-icon @click.native="onReset" name="replay" style="margin-right:10px" />
        <van-icon @click.native="onLocation" name="location-o" />
      </div>
    </div>
    <div class="map-content">
      <googlemaps-map ref="map" class="map" :center.sync="center" :zoom.sync="zoom" style="height:100%">
        <googlemaps-user-position @update:position="setUserPosition" />
        <googlemaps-marker v-for="(marker,index) in markers" :key="index" :title="marker.name" :draggable="false" :position="marker.geometry.location" :icon="marker.icon" />
      </googlemaps-map>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "Bicycle repair",
      center: { lat: 40.7143528, lng: -74.0059731 },
      options: {},
      zoom: 14,
      markers: [],
      userPosition: { lat: 40.7143528, lng: -74.0059731 },
    };
  },
  mounted() {
    this.getLocation()
    this.init();
  },
  methods: {
    async init() {
      const { google } = window;
      this.map = await this.$refs.map.$_getMap()
      this.onSearch()
    },
    setUserPosition(position) {
      this.userPosition = position
    },
    //清空查询
    async onReset() {
      this.value = ""
      this.end = ""
    },
    //搜索修车行
    async onSearch() {
      if (!this.service) {
        const { google } = window;
        this.service = new google.maps.places.PlacesService(this.map);
      }
      this.service.findPlaceFromQuery({
        query: this.value,
        locationBias: { radius: 20 * 1000, center: this.center },
        fields: ["name", "geometry"]
      }, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          if (results.length === 0) {
            return this.$toast('There is no repair shop nearby')
          }
          this.markers = results
          this.center = results[0].geometry.location
        } else {
          this.$toast(status)
        }
      });
    },
    //获取当前地理位置
    getLocation() {
      const { navigator } = window
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.showPosition, this.showError);
      } else {
        this.$toast("Geolocation is not supported by this browser")
      }
    },
    showPosition(position) {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }
    },
    //开始导航
    onLocation() {
      if (!this.markers.length) {
        return this.$toast("There is no repair shop nearby")
      }
      const item = this.markers[0]
      window.location.href = "https://www.google.com/maps/dir/?api=1&origin=" + `${this.userPosition.lat},${this.userPosition.lng}` + "&destination=" + item.geometry.location.lat() + ',' + item.geometry.location.lng() + "&travelmode=bicycling";
    },
    urlreplace(str) {
      return encodeURIComponent(str).replace(/%20/g, "+");
    },
    showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          this.$toast("User denied the request for Geolocation.")
          break;
        case error.POSITION_UNAVAILABLE:
          this.$toast("Location information is unavailable.")
          break;
        case error.TIMEOUT:
          this.$toast("The request to get user location timed out.")
          break;
        case error.UNKNOWN_ERROR:
          this.$toast("An unknown error occurred.")
          break;
      }
    }
  }
};
</script>

<style lang="less" scoped>
@import "../home/header.less";
.map-wrap .map-header .input-wrap {
  height: 34px;
}
/deep/ .gm-fullscreen-control,
/deep/ .gmnoprint {
  display: none;
}
.map-wrap .map-header{
  z-index: 9999;
}
</style>
