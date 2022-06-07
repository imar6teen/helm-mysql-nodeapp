const jwt = require("jsonwebtoken");

// const {
//     SECRET_JWT
// } = require('../config/config')

const {
  privateKey,
  algorithm,
  expiresIn,
  publicKey,
} = require("../config/jwtConfig");

class JsonWebToken {
  /**
   *
   * @param {Object} payload
   * @returns
   */
  sign(payload) {
    return new Promise((res, rej) => {
      jwt.sign(
        payload,
        privateKey,
        {
          algorithm: algorithm,
          expiresIn: expiresIn,
        },
        (err, token) => {
          if (err) rej(err);
          res(token);
        }
      );
    });
  }
  verify(token) {
    return new Promise((res, rej) => {
      jwt.verify(
        token,
        publicKey,
        {
          algorithms: [algorithm],
          complete: true,
        },
        (err, decoded) => {
          if (err) rej(err);
          res(decoded);
        }
      );
    });
  }
}

module.exports = new JsonWebToken();
