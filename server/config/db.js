import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config()
const url = process.env.DB_URL;
const DBConnect = () => {
    const connection = mongoose.connect(url)
    console.log("connection successs")
}   