const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//点赞
const uSchema = new Schema(
    {
        userId: String,
        articleId: String,
        isAgree: Boolean,
    },
    {
        versionKey: false,
        timestamps: true
    }
);

module.exports = mongoose.model("agree", uSchema);
