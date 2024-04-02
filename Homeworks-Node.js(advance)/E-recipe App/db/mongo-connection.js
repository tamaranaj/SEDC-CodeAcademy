import mongoose from "mongoose";
import { ENV } from "../services/env.config.js";

export const mongoConnection = async()=>{
    try {
        await mongoose.connect(ENV.MONGO_URL,{
            dbName: "recipe-db"
        })
        console.log("Connected with MongoDB")
    } catch (error) {
        throw new Error("Error while connection.")
    }
}