import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import UserRouter from "./Routes/UserRoute.js";
import db from "./db.js";
dotenv.config();

let app = express();
app.use(express.json());
app.use(cors());
app.use(UserRouter);

let PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log("Server Is Started");
})