import express from "express"
import mongoose from "mongoose"
import { Users } from "./User.mjs"
import { router } from "./routes/users.js"


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send('Hello World');
})

app.use(express.json())

app.use('/users', router)


const mongoStart = async () => {
    console.log("Connecting...", process.env.MONGO_URL); //'mongodb://localhost:27017/test'  $env:MONGO_URL='mongodb://localhost:27017/test'
    await mongoose.connect(process.env.MONGO_URL)
    app.listen(port, () => console.log("listening on port " + port))
    console.log("Connected!", process.env.MONGO_URL);
}

mongoStart().then(_ => console.log("Finished"))
console.log("mongo");

export default app












