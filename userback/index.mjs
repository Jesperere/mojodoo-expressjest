import Express from "express"
import mongoose from "mongoose"
import { Users } from "./User.mjs"
import { router } from "./routes/users.js"


const app = Express();
const port = 3000;
const db = mongoose.connection

// app.get("/", (req, res) => {
//     res.send('Hello World');
// })

app.use(Express.json())

app.use('/users', router)


const mongoStart = async () => {
    console.log("Connecting...", process.env.MONGO_URL); //'mongodb://localhost:27017/test'  $env:MONGO_URL='mongodb://localhost:27017/test'
    await mongoose.connect(process.env.MONGO_URL)
    console.log("Connected!", process.env.MONGO_URL);
}

mongoStart().then(_ => console.log("Finished"))
console.log("mongo");

app.listen(port, () => console.log("listening on port " + port))














