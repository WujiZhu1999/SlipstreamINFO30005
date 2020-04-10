const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const morgan = require('morgan')
const db = "mongodb://admin:admin123@ds235197.mlab.com:35197/heroku_8w9bx2n2"
mongoose.connect(db, { useNewUrlParser: true }); //链接mongoose

const app = express();
app.use(cookieParser());
app.use(
  session({
    secret: "12345",
    cookie: { maxAge: 1000 * 3600 * 24 * 30 },
    resave: false,
    saveUninitialized: true
  })
);
app.use(morgan("short"));
app
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"));

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

app.all("*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By", " 3.2.1");
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});



app.use("/map", require("./controller/Map"));
app.use("/user", require("./controller/Login"));
app.use("/user", require("./controller/Users"));
app.use("/article", require("./controller/Article"));
app.use("/comment", require("./controller/Comment"));

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
