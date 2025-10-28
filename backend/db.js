import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

let URL = process.env.URL;

mongoose.connect(URL);

let db = mongoose.connection;

db.on("connected", () => {
    console.log("Database Connected Successfully");
})

db.on("error", () => {
    console.log("Databse Connection Error");
})

db.on("disconnected", () => {
    console.log("Databse Disconnected");
})

export default db;