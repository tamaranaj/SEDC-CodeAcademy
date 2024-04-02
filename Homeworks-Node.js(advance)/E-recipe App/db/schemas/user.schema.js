import mongoose from "mongoose";

const { Schema } = mongoose

const userSchema  = new Schema({
    email: {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    permission: {
        type: String,
        required: true
    }
})

export const userMongoModel = mongoose.model("User", userSchema, "users" )