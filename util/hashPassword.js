const crypto = require("crypto");

const { SALT_PASSWORD } = require("../config/config");

module.exports = (pass) => {
  return new Promise((res, rej) => {
    crypto.scrypt(pass, SALT_PASSWORD, 64, (err, key) => {
      if (err) rej(err);
      res(key.toString("hex"));
    });
  });
};
