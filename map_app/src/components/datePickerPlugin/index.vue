<template>
  <van-popup @click="popupClick" @open="popupOpen" @opened="popupOpened" @close="popupClose" @click-overlay="popupClickOverlay" v-model="visible" v-bind="popupConfig">
    <van-datetime-picker @change="dateChange" @confirm="dateConfirm" @cancel="dateCancel" v-bind="datePickerConfig" />
  </van-popup>
</template>

<script>
import Vue from "vue"
import { Popup, DatetimePicker } from "vant"
const _popupConfig = {
  position: "bottom",
  "get-container": "body"
}

const _datePickerConfig = {
  type: "date",
  "min-date": new Date(new Date().getFullYear() - 100, 1, 1),
  formatter(type, value) {
    if (type === "year") {
      return `${value}`
    } else if (type === "month") {
      return `${value}`
    } else if (type === "day") {
      return `${value}`
    }
    return value
  }
}
export default {
  components: { [Popup.name]: Popup, [DatetimePicker.name]: DatetimePicker },
  data() {
    return {
      visible: false,
      datePickerConfig: { ..._datePickerConfig },
      popupConfig: { ..._popupConfig }
    }
  },
  methods: {
    show(datePickerConfig, popupConfig) {
      this.datePickerConfig = Object.assign(
        _datePickerConfig,
        datePickerConfig || {}
      )
      this.popupConfig = Object.assign(_popupConfig, popupConfig || {})
      this.visible = true
    },
    hide() {
      this.visible = false
    },
    //popup
    popupClick(e) {
      this.popupConfig.click && this.popupConfig.click(e)
    },
    popupOpen(e) {
      this.popupConfig.open && this.popupConfig.open(e)
    },
    popupOpened(e) {
      this.popupConfig.opened && this.popupConfig.opened(e)
    },
    popupClose(e) {
      this.popupConfig.close && this.popupConfig.close(e)
    },
    popupClickOverlay(e) {
      this.popupConfig.clickOverlay && this.popupConfig.clickOverlay(e)
    },
    //dete
    dateChange(e) {
      this.datePickerConfig.change && this.datePickerConfig.change(e)
    },
    dateConfirm(e) {
      this.hide()
      this.datePickerConfig.confirm && this.datePickerConfig.confirm(e)
    },
    dateCancel(e) {
      this.hide()
      this.datePickerConfig.cancel && this.datePickerConfig.cancel(e)
    }
  }
}
</script>

<style>
</style>
