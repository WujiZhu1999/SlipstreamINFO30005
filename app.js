var express = require('express');
var app = express();

const dashboardRouter = require("./routes/dashboard.js");
const forumRouter = require("./routes/forum.js")
const tipRouter = require("./routes/tips.js")
const mapRouter = require("./routes/map.js");

app.use('/', dashboardRouter);
app.use("/forum", forumRouter);
app.use("/tips", tipRouter);
app.use("/map", mapRouter);

app.listen(3000, () => {
  console.log('listening on port 3000');
});