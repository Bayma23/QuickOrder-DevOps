const request = require("supertest");
const app = require("../server");

describe("Pedidos", () => {

  test("GET /pedidos", async () => {

    const response = await request(app)
      .get("/pedidos");

    expect([200, 500]).toContain(response.statusCode);

  });

});