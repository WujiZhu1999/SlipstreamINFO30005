const FixEvent = {
  isIos() {
    let m = navigator.userAgent;
    let isIos = !!m.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    return isIos;
  },
  addFixEvent(vm) {
    if (this.isIos()) {
      //为input、textarea、select添加blur事件
      vm.$nextTick(() => {
        let a = document.getElementsByTagName("input");
        let s = document.getElementsByTagName("textarea");
        for (let i = 0; i < a.length; i++) {
          a[i].addEventListener("blur", this.fixScroll);
        }
        for (let i = 0; i < s.length; i++) {
          s[i].addEventListener("blur", this.fixScroll);
        }
      });
    }
  },
  removeFixEvent() {
    if (this.isIos()) {
      let a = document.getElementsByTagName("input");
      let s = document.getElementsByTagName("textarea");
      for (let i = 0; i < a.length; i++) {
        a[i].removeEventListener("blur", this.fixScroll);
      }
      for (let i = 0; i < s.length; i++) {
        s[i].removeEventListener("blur", this.fixScroll);
      }
    }
  },
  fixScroll() {
    window.scroll(0, 0);
  }
};
export default FixEvent;
