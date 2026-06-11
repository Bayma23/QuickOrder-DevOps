const request = require("supertest");
const app = require("../server");

describe("Health Check", () => {

  test("GET /health deve retornar 200", async () => {

    const response = await request(app)
      .get("/health");

    expect(response.statusCode).toBe(200);

  });

});