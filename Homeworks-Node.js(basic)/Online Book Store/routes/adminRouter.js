import { Router } from "express";
import AdminController from "../controllers/auth.admin.controller.js";
import { authenticate,authorize } from "../middlewares/auth.middleware.js";

const adminBooksRouter = Router() 
const adminController = new AdminController()

adminBooksRouter.get("/deletedbooks",authenticate,authorize, async(req,res)=>{
    adminController.readBooks(req,res)
})

adminBooksRouter.put("/books/:id",authenticate,authorize, async(req,res)=>{
    adminController.editBook(req,res)
})




export default adminBooksRouter