import express from "express"
import mongoose from "mongoose"
import { router } from "./routes/users.js"
import { config } from "dotenv";

config()

if (!process.env.MONGO_URL)
    throw 'MONGO_URL is required!!'

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World');
})

app.use(express.json())

app.use('/users', router)


const mongoStart = async () => {
    console.log("Connecting...", process.env.MONGO_URL);
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => console.log("listening on port " + port))
    console.log("Connected!", process.env.MONGO_URL);
}

mongoStart().then(() => console.log("Finished"))
console.log("mongo");

export default app












