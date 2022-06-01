class IncorrectPassword extends Error {
  constructor(message) {
    super(message);
    this.name = "IncorrectPassword";
    this.statusCode = 401;
  }
}

module.exports = IncorrectPassword;
