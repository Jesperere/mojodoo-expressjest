import request from "supertest";
import app from "../index.mjs";
import crypto from "crypto";
import mongoose from "mongoose";


describe("GET /users", () => {
  const newUser = {
    _id: crypto.randomUUID(),
    firstName: "Jesper",
    lastName: "Testsson",
    age: 27,
    sex: "male",
    email: "test.testsson@hotmail.com",
    phoneNumber: "0732020202",
    adress: "mojodoogatan 3",
    role: "User",
  };
  beforeAll(async () => {
    await request(app).post("/users").send(newUser);
    // console.log(newUser);
    // console.log(process.env.MONGO_URL);

  });
  afterAll(async () => {
    await request(app).delete(`/users/${newUser._id}`);
    await mongoose.connection.close()
    // console.log(newUser._id);
  });
  test("should return 200", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
  test("should return users", async () => {
    const response = await request(app).get("/users");
    expect(response.body.length >= 1);
  })
});

