class PasswordNotMatch extends Error {
  constructor(message) {
    super(message);
    this.name = "PasswordNotMatch";
    this.statusCode = 401;
  }
}

module.exports = PasswordNotMatch;
