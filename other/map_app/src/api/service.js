export const phone = option => ({
  type: "string",
  pattern: /^1[0-9]{10}$/
});
/**
 * 1.不能纯数字
 * 2.不能纯字母
 * 3.至少6位
 */
export const pwdre = /^(?![0-9]+$)(?![a-zA-Z]+$)[\S]{6,}$/;
