const prisma = require("../util/prisma");

const mockDb = [];

jest.mock("../util/prisma", () => {
  const originalModule = jest.requireActual("../util/prisma");

  return {
    ...originalModule,
    user: {
      create: (obj) => {
        return new Promise((res, rej) => {
          mockDb.push(obj.data);
          res(obj.data);
        });
      },
      findFirst: (obj) => {
        return new Promise((res, rej) => {
          const found = mockDb.find((user) => user.name === obj.where.name);
          res(found);
        });
      },
    },
  };
});

it("should insert dummy data", async () => {
  const expectedValue = await prisma.user.create({
    data: {
      name: "John",
      email: "john@jane.com",
    },
  });
  expect(expectedValue).toEqual({
    name: "John",
    email: "john@jane.com",
  });
});

it("should select dummy data", async () => {
  const foundUser = await prisma.user.findFirst({
    where: {
      name: "John",
    },
  });

  expect(foundUser).toEqual({
    name: "John",
    email: "john@jane.com",
  });
});
