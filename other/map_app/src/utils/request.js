import axios from "axios";
import store from "@/store";
import Vue from "vue";
const service = axios.create({
  timeout: 10000 * 6 // 请求超时时间
});

service.interceptors.request.use(async config => {
  const { user } = store.getters;
  const token = user.token;
  if (token) {
    config.headers = config.headers || {};
    config.headers.token = token;
  }
  return config;
});

service.interceptors.response.use(
  function (res) {
    if (res.config.responseType === "blob") {
      return res;
    }
    //是否错误展示提示
    const { isTips = true } = res.config;
    if (isTips) {
      const { info, code } = res.data || {};
      if (code && code !== 200) {
        onMessage("warning", info);
        throw res;
      }
    }

    return res;
  },
  function (error) {
    if (!error.response) {
      onMessage("error", "Server request timeout！");
      return Promise.reject(error);
    }
    //是否错误展示提示
    const { isTips = true } = error.response.config;
    if (error.response.status === 401) {
      const { message } = error.response.data;
      store.dispatch("users/logout");
      onMessage("error", message || "System exception");
      return Promise.reject(error);
    }
    if (isTips) {
      const { code, status, message: errorMsg } = error.response.data || {};
      if (status === 500) {
        onMessage("error", errorMsg || "System exception");
        return Promise.reject(errorMsg);
      }
      if (code && code !== 200) {
        onMessage("error", errorMsg || "System exception");
        return Promise.reject(error);
      }
    }

    return Promise.reject(status);
  }
);

function onMessage(type, message) {
  setTimeout(() => {
    Vue.prototype.$toast(message);
  });
}

export default service;
