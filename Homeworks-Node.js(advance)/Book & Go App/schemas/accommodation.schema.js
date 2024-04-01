import mongoose from "mongoose";

const { Schema } = mongoose

const accommodationsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bookingPricePerDay: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    hasAC: {
        type: Boolean,
        required: true
    },
    hasPrivateParking: {
        type: Boolean,
        required: true
    },
    hasWifi: {
        type: Boolean,
        required: true
    },
    isAvailable: {
        type: Boolean,
        required: true
    }
})


export const accMongoModel = mongoose.model("Accommodations",accommodationsSchema, "Accommodations" )