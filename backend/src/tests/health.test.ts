import request from "supertest";
import app from "../app";

describe("Health Check API", () => {
  it("should return 200 for health check endpoint", async () => {
    const response = await request(app).get("/api/health");
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty("status", "OK");
  });
});
