var express = require("express");
var session = require("express-session");
var app = express();

const dashboardRouter = require("./routes/dashboard.js");
const forumRouter = require("./routes/forum.js");
const tipRouter = require("./routes/tips.js");
const mapRouter = require("./routes/map.js");
const usersRouter = require("./routes/users.js");
const loginRouter = require("./routes/login.js");
const friendsRouter = require("./routes/friends.js");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({secret: "SlipstreamSecret",saveUninitialized: true,resave: true}));

app.use('/', dashboardRouter);
app.use("/forum", forumRouter);
app.use("/tips", tipRouter);
app.use("/map", mapRouter);
app.use("/users", usersRouter);
app.use("/login", loginRouter);

app.use("/friends", friendsRouter);

app.listen(process.env.PORT || 3001, () => {
  console.log('listening on port ' + (process.env.port || 3001));
});

/* TODO
 * fake facebook API
 * additional dashboard features
 * put the login middleware on all relevant pages
*/