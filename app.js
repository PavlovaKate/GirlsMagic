/* eslint-disable import/no-extraneous-dependencies */
require("@babel/register");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
// const cookieParser = require("cookie-parser");
const removeHeaders = require("./middleware/removeHeaders");

const ssr = require("./middleware/ssr");
const verifyAccessToken = require("./middleware/veryfiJWT");

const app = express();

const PORT = 3000;

const indexRouter = require("./routes/index.router");

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(removeHeaders);
app.use(express.json());
app.use(ssr);

app.use(morgan("dev"));
// app.use(cookieParser());
app.use(verifyAccessToken);

app.use("/", indexRouter);

app.listen(PORT, () => {
  console.log(`наш сервер работает на порте ${PORT}`);
});
