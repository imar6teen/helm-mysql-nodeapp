const prisma = require("../util/prisma");
const hashPassword = require("../util/hashPassword");
const errorFactory = require("../error/errorFactory");

/**
 * @param {import("express").Request} req
 * @param {import('express').Response} res
 */
module.exports = async (req, res) => {
  try {
    // get the body
    const { name, email, password, confirmPassword } = req.body;
    //check if password and condifrmPassword is same
    if (password !== confirmPassword) throw errorFactory("PASSWORD_NOT_MATCH");
    // check if the user exists in db
    const isUserExist = await prisma.user.findFirst({
      where: {
        email,
      },
    });
    // if exists, send the response back with status code 401 and error message
    if (isUserExist != null) throw errorFactory("EMAIL_ALREADY_EXIST");
    // if not exists, create the user in db
    const hashedPassword = await hashPassword(password);
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });
    // send the response back with status code 200
    res.status(200).json({ msg: "user signed in!" });
  } catch (err) {
    console.log(err);
    res.status(err.statusCode).json({ msg: err.message });
  }
};
