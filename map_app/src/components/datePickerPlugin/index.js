import Datetime from "./index.vue"

const libs = {
  $vm: null,
  show(datePickerConfig, popupConfig) {
    libs.$vm.show(datePickerConfig, popupConfig)
  },
  hide() {
    libs.$vm.hide()
  }
}

export default {
  install(Vue) {
    const _Datetime = Vue.extend(Datetime)
    const $vm = new _Datetime({
      el: document.createElement("div")
    })
    if (typeof document !== "undefined") {
      document.body.appendChild($vm.$el)
      libs.$vm = $vm
      Vue.prototype.$datetime = libs
    }
  }
}
