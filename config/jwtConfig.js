const fs = require("fs");
const path = require("path");

module.exports = {
  privateKey: fs.readFileSync(path.resolve("keys", "private.key")),
  algorithm: "RS256",
  expiresIn: 60 * 60,
};
