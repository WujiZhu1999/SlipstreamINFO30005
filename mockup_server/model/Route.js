const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//路线
const uSchema = new Schema(
  {
    user: { type: Schema.Types.ObjectId, ref: "users" }, //骑行用户
    origin: String,
    destination: String,
    distance: Number, //公里
    duration: Number, //时间
    region: String,//区域
    status: {
      type: Number,
      default: 0
    } //状态 0 开始骑行 1结束
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("route", uSchema);
