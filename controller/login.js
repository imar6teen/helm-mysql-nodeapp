const prisma = require("../util/prisma");
const verifyPassword = require("../util/verifyPassword");
const jsonwebtoken = require("../util/JsonWebToken");

/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
module.exports = async (req, res) => {
  try {
    // get the body
    const { email, password } = req.body;
    // check if the user exists in db
    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    // if not exists, send the response back with status code 401 and error message
    if (isUserExist === null)
      return res.status(401).json({ msg: "email or password incorrect" });
    // if exists, check the password
    const isCorrectPassword = await verifyPassword(
      password,
      isUserExist.password
    );
    // if false, return passwod is incorrect
    if (isCorrectPassword === false)
      return res.status(401).json({ msg: "email or password incorrect" });
    // else, return generate token
    const token = await jsonwebtoken.sign({ name: isUserExist.name, email });
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
    res.status(500).json({ msg: "Internal Server Error" });
  }
};
