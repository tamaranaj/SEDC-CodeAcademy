import BookingModel from "../models/bookings.model.js";

class BookingController{
    constructor(){
        this.bookingModel = new BookingModel()
    }

    async bookAcc(req, res){
        const {accommodation} = req.body
        try {
            const acc = await this.bookingModel.bookAcc(accommodation)
            
            if(!acc._id){
                return res.send({message: "Accommodation is not found"})
            }
            res.send({message: `Accommodation with ID ${acc._id} is booked.`})
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async readBookings(req, res){
        try {
            const acc = await this.bookingModel.readBookings()
            if(!acc){
                return res.send({message: "No bookings to show"})
            }
            res.send(acc)
        } catch (error) {
            res.send({message: error.message})
        }
    }

    async removeBooking(req, res){
        const id = req.params.id
        try {
            const removed = await this.bookingModel.removeBookings(id)
            console.log(removed)
            if(!removed){
                return res.status(404).send({message: `There is no booked accommodation with id: ${id}.`})
            }
            res.send({message: `Accommodation with id ${id} is successfully removed.`})
        } catch (error) {
            res.send({message: error.message})
        }
    }
}

export default BookingController