class EmailNotExist extends Error {
  constructor(message) {
    super(message);
    this.name = "EmailNotExist";
    this.statusCode = 401;
  }
}

module.exports = EmailNotExist;
