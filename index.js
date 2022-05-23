const express = require("express");

const app = express();
const router = require("./router/v1");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

module.exports = app;
