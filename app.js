const express = require("express");
const app = express();
const router = require("./route/userRoute");
require("dotenv").config();
require("./config/db")();

app.use(express.json());
app.use(router);

module.exports = app;
