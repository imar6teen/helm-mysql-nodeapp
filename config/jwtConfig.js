const fs = require("fs");
const path = require("path");

module.exports = {
  privateKey: fs.readFileSync(path.resolve("keys", "private.key")),
  publicKey: fs.readFileSync(path.resolve("keys", "public.key")),
  algorithm: "RS256",
  expiresIn: 60 * 60,
};
