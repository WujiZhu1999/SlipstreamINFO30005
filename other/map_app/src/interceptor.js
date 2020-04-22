import store from "@/store";
import { setDocumentTitle } from "@/utils/utils";
const whiteList = ["login","register","share"];

function isLogin(user) {
  return user._id && user.outTime > new Date().getTime();
}

export function beforeEach(to, from, next) {
  setDocumentTitle(to.meta && to.meta.title);
  const { user } = store.getters;
  if (whiteList.indexOf(to.name) !== -1) {
    return next();
  }
  if (isLogin(user)) {
    return next();
  } else {
    next({ name: "login" });
    store.dispatch("users/logout");
  }
}
export function afterEach() { }
