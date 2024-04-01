import { Router } from "express";
import BookingController from "../controllers/bookings.controller.js";
const bookingRouter = Router()
const bookingController = new BookingController()


//CREATE BOOKING
bookingRouter.post("", async(req, res)=>{
    await bookingController.bookAcc(req, res)
})

// GET BOOKED ACCOMMODATIONS
bookingRouter.get("",async(req, res)=>{
    await bookingController.readBookings(req, res)
})

//DELETE BOOKED ACCOMMODATION
bookingRouter.delete("/:id", async(req, res)=>{
    await bookingController.removeBooking(req, res)
})
export default bookingRouter