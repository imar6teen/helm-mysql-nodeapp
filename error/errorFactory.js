const EmailNotExist = require("./EmailNotExist");
const ServerError = require("./ServerError");
const IncorrectPassword = require("./IncorrectPassword");
const PasswordNotMatch = require("./PasswordNotMatch");
const EmailAlreadyExist = require("./EmailAlreadyExist");

const errorFactory = (err) => {
  switch (err) {
    case "EMAIL_NOT_EXIST":
      return new EmailNotExist("email is not exist");
    case "INCORRECT_PASSWORD":
      return new IncorrectPassword("password is incorrect");
    case "PASSWORD_NOT_MATCH":
      return new PasswordNotMatch("password is not match");
    case "EMAIL_ALREADY_EXIST":
      return new EmailAlreadyExist("email is already exist");
    default:
      return new ServerError("something went wrong");
  }
};

module.exports = errorFactory;
