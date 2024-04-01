import mongoose from "mongoose";
const { Schema } = mongoose

const bookingSchema = new Schema({
    
        accommodation : {
            type: Schema.Types.ObjectId,
            ref: "Accommodations"
        },
    
})

export const bookingMongoModel = mongoose.model("Bookings", bookingSchema, "bookings")