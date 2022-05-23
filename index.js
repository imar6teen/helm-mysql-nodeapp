const express = require("express");
const { HTTP_PORT } = require("./config/config");

const prisma = require("./util/prisma");
const app = express();
const router = require("./router/v1");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.listen(HTTP_PORT, () => {
  console.log(`Server is running on port ${HTTP_PORT}`);
});
