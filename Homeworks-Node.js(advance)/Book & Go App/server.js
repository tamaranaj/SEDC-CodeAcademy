import express from "express";
import { mongo_connection } from "./db/mongo-connection.js"
import AccommondationsRouter from "./routes/accommodations.routes.js";
import bookingRouter from "./routes/booking.routes.js";
const server = express();

server.use(express.json());
server.use("/accommodations",AccommondationsRouter);
server.use("/bookings", bookingRouter)

server.listen(3000, "localhost", async () => {
  console.log("Server is up and running");
  await mongo_connection();
});


// {
//   "name": "" ,
//   "address": "",
//   "bookingPricePerDay": "",
//   "type": "",
//   "hasAC": true,
//   "hasPrivateParking": true,
//   "hasWifi": true,
//   "isAvailable": true
// }