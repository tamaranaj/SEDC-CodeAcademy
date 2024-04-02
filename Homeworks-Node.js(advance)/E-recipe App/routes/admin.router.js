import { Router } from "express";
import AdminController from "../controllers/admin.controller.js";
import {authenticate, authorize} from "../middlewares/auth.middlewares.js"
const adminRouter = Router()
const adminController = new AdminController()


//GET DELETED RECIPES
adminRouter.get("/deletedRecipes", authenticate, authorize,async(req, res)=>{
    await adminController.getDeleted(req, res)
})

//GET ORIGINAL RECIPES BEFORE UPDATE
adminRouter.get("/getOriginalRecipe", authenticate, authorize,async(req, res)=>{
    await adminController.getOriginal(req, res)
})

export default adminRouter