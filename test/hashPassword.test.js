const hashPassword = require("../util/hashPassword");

it("should success hash password", async () => {
  const dummyPassword = "dummy password";
  const password = await hashPassword(dummyPassword);
  expect(password).not.toBe(dummyPassword);
});
