const crypto = require("crypto");

const { SALT_PASSWORD } = require("../config/config");

module.exports = (password, hashPassword) => {
  return new Promise((res, rej) => {
    crypto.scrypt(password, SALT_PASSWORD, 64, (err, key) => {
      if (err) rej(err);
      const isValid = key.toString("hex") === hashPassword ? true : false;
      res(isValid);
    });
  });
};
