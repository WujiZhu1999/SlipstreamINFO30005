import moment from 'moment'
import Vue from 'vue'
export function dateFormat(value, fmt = 'YYYY/MM/DD HH:mm:ss') {
  return !value ? '' : moment(value).format(fmt)
}

Vue.filter('dateFormat', dateFormat)
