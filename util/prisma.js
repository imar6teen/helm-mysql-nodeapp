const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient({
  log: [
    {
      emit: "stdout",
      level: "info",
    },
    {
      emit: "stdout",
      level: "query",
    },
    {
      emit: "stdout",
      level: "warn",
    },
  ],
});

module.exports = prisma;
