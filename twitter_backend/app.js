const express = require("express");
const session = require("express-session");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const baseController = require("./controllers/baseController")();

// Use express session
app.use(
  session({
    resave: true,
    saveUninitialized: true,
    secret: "SOMERANDOMSECRETHERE",
    cookie: { maxAge: 60000 },
  })
);

// Middlewares
// app.use(require("connect").bodyParser());
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

let connect = () => {
  mongoose.connection
    .on("error", console.log)
    .on("disconnected", connect)
    .once("open", listen);
  return mongoose.connect(process.env.DATABASE, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

const port = process.env.PORT || 9000;
let listen = () => {
  app.listen(port, () => {
    console.log(`Listening at port ${port}`);
  });
};

connect();

app.use("/", baseController);

module.exports = app;
