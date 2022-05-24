const verifyPassword = require("../util/verifyPassword");
const hashPassword = require("../util/hashPassword");

it("should verify password", async () => {
  const password = "dummy password";
  const hashedpassword = await hashPassword(password);
  const isVerify = await verifyPassword(password, hashedpassword);
  expect(isVerify).toBeTruthy();
});
