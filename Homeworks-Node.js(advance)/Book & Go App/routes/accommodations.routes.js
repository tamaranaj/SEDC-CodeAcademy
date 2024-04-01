import { Router } from "express";
import AccommodationsController from "../controllers/accommodations.controller.js";
const AccommondationsRouter = Router();
const accController = new AccommodationsController()
// YOUR ROUTES GOES HERE

//CREATE ACCOMMODATION
AccommondationsRouter.post("", async(req,res)=>{
    await accController.addAccommodation(req,res)
})
//GET ALL ACCOMMODATIONS
AccommondationsRouter.get("", async(req, res)=>{
    await accController.readAccommodations(req, res)
})
//GET BY ID
AccommondationsRouter.get("/:id", async(req,res)=>{
    await accController.findById(req, res)
})
//DELETE BY ID
AccommondationsRouter.delete("/:id", async(req, res)=>{
    await accController.deleteById(req,res)
})

//UPDATE BY ID
AccommondationsRouter.put("/:id", async(req, res)=>{
    await accController.updateAcc(req, res)
})
export default AccommondationsRouter;
