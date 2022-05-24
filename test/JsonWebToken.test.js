const JsonWebToken = require("../util/JsonWebToken");

const payload = {
  name: "test_user",
  email: "hahahehe@hihi.hoho",
};

let token;

it("should sign json web token", async () => {
  token = await JsonWebToken.sign(payload);
  expect(token).not.toBe(payload);
});

it("Should verify jsonwebtoken", async () => {
  const isValid = await JsonWebToken.verify(token);
  expect(isValid).toBeTruthy();
});
