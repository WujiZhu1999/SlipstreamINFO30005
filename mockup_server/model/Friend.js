const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//好友
const uSchema = new Schema(
  {
    me: { type: Schema.Types.ObjectId, ref: "users" }, //当前用户
    friend: { type: Schema.Types.ObjectId, ref: "users" } //关注的用户
  },
  {
    versionKey: false,
    timestamps: true
  }
);

module.exports = mongoose.model("friend", uSchema);
