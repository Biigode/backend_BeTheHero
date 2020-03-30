const request = require("supertest");
const connection = require("../../src/database/connection");
const app = require("../../src/app");

describe("ong", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });
  afterAll(async () => {
    await connection.destroy();
  });
  it("should be able to create a new ong", async () => {
    const response = await request(app)
      .post("/ongs")
      .send({
        nome: "ong do victor",
        email: "victorOng.freitas@hotmail.com",
        whatsapp: "19-992520151",
        city: "Campinas",
        uf: "SP"
      });

    expect(response.body).toHaveProperty("id");
    expect(response.body.id).toHaveLength(8);
  });
});
