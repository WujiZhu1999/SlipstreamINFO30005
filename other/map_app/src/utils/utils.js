import CryptoJS from "crypto-js"

//解析url字符串
export function URLObject(url) {
  url = url || window.location.href
  const theRequest = {}
  let strs = ""
  if (url.indexOf("?") !== -1) {
    const str = url.substring(url.indexOf("?") + 1)
    strs = str.split("&")
    for (let i = 0; i < strs.length; i++) {
      theRequest[strs[i].split("=")[0]] = decodeURIComponent(strs[i].split("=")[1])
    }
  }
  return theRequest
}

//流文件下载
export const download = (content, fileName, mimeType) => {
  const a = document.createElement("a")
  mimeType = mimeType || "application/octet-stream"
  if (navigator.msSaveBlob) {
    navigator.msSaveBlob(
      new Blob([content], {
        type: mimeType
      }),
      fileName
    )
  } else if (URL && "download" in a) {
    a.href = URL.createObjectURL(
      new Blob([content], {
        type: mimeType
      })
    )
    a.setAttribute("download", fileName)
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
  } else {
    location.href = "data:application/octet-stream," + encodeURIComponent(content)
  }
}

export function getAesString(data, key, iv) {
  key = CryptoJS.enc.Utf8.parse(key)
  iv = CryptoJS.enc.Utf8.parse(iv)
  let encrypted = CryptoJS.AES.encrypt(data, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}
//加密
export function getAES(data) {
  let key = "jkgl"
  let iv = "jkgl_iv"
  let encrypted = getAesString(data, key, iv)
  return encrypted
}
//设置标题
export const setDocumentTitle = function(title) {
  document.title = title
  const ua = navigator.userAgent
  const regex = /\bMicroMessenger\/([\d\.]+)/
  if (regex.test(ua) && /ip(hone|od|ad)/i.test(ua)) {
    const i = document.createElement("iframe")
    i.src = "/favicon.ico"
    i.style.display = "none"
    i.onload = function() {
      setTimeout(function() {
        i.remove()
      }, 9)
      // eslint-disable-next-line
    };
    document.body.appendChild(i)
  }
}

export function is() {
  let is = {
    types: ["Array", "Function", "Boolean", "Date", "Number", "Object", "RegExp", "String", "Window", "HTMLDocument"]
  }
  for (let i = 0, c; (c = is.types[i++]); ) {
    is[c] = (function(type) {
      return function(obj) {
        if (type === "Number" && isNaN(obj)) {
          return false
        }
        return Object.prototype.toString.call(obj) == "[object " + type + "]"
        // eslint-disable-next-line
      };
    })(c)
  }
  return is
}

//数字格式化
export function numberFormat(value, { min, max, precision } = {}) {
  value = Number(value)
  precision = precision || 0
  if (isNaN(value)) return ""
  if (is().Number(min) && value < min) {
    return min.toFixed(precision)
  }
  if (is().Number(max) && value > max) {
    return max.toFixed(precision)
  }
  return value.toFixed(precision)
}
