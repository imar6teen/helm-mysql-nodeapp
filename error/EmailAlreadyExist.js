class EmailAlreadyExist extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailAlreadyExist";
    this.statusCode = 401;
  }
}

module.exports = EmailAlreadyExist;
