const request = require("supertest");
const app = require("../../index");

it("should have status code 200", (done) => {
  request(app)
    .get("/api/v1/")
    .then((response) => {
      expect(response.statusCode).toBe(200);
      done();
    });
});
