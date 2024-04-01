import { bookingMongoModel } from "../schemas/bookings.schema.js"

class BookingModel{
    
    async bookAcc(acc){
        const accommodation = new bookingMongoModel({accommodation: acc})
        const response = await accommodation.save()
        

        return response
    }

    async readBookings(){
        const bookedAcc = await bookingMongoModel.find().populate("accommodation")
        return bookedAcc
    }

    async removeBookings(id){
        const acc = await bookingMongoModel.findByIdAndDelete(id)
        return acc
    }
}

export default BookingModel