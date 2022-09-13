import request from "supertest";
import app from "../index.mjs";
import crypto from "crypto";

const users = [];

app.get("/users", (req, res) => {
  return res.status(200).json({
    data: users,
  });
});

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
    console.log(newUser);
    console.log(process.env.MONGO_URL);
  });
  afterAll(async () => {
    await request(app).delete(`/users/${newUser._id}`);
    console.log(newUser._id);
  });
  it("should return 200", async () => {
    const response = await request(app).get("/users");
    expect(response.statusCode).toBe(200);
  });
  it("should return users", async () => {
    const response = await request(app).get("/users");
    expect(response.body.length >= 1).toBe(true);
  });
});

app.post("/users", (req, res) => {
  try {
    const { ...req } = req.body;
    const newUser = { ...req };
    users.push(newUser);
    return res.status(201).json({
      data: users,
      error: null,
    });
  } catch (error) {
    return res.status(500).json({
      data: null,
      error: error,
    });
  }
});
