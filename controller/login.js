const prisma = require("../util/prisma");
const verifyPassword = require("../util/verifyPassword");
const jsonwebtoken = require("../util/JsonWebToken");
const errorFactory = require("../error/errorFactory");

/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
module.exports = async (req, res) => {
  try {
    // get the body
    const { email, password } = req.body;
    // check if the user exists in db
    const checkUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    // if not exists, send the response back with status code 401 and error message
    if (checkUserExist === null) throw errorFactory("EMAIL_NOT_EXIST");
    // if exists, check the password
    const isCorrectPassword = await verifyPassword(
      password,
      checkUserExist.password
    );
    // if false, return passwod is incorrect
    if (isCorrectPassword === false) throw errorFactory("INCORRECT_PASSWORD");
    // else, return generate token
    const token = await jsonwebtoken.sign({ name: checkUserExist.name, email });
    // assign the token in header or cookie and send the response back with status code 200
    res
      .cookie("jwt", token, {
        httpOnly: true,
        secure: true,
      })
      .status(200)
      .json({ msg: "signed in!" });
  } catch (err) {
    console.error(err);
    res.status(err.statusCode).json({ msg: err.message });
  }
};
