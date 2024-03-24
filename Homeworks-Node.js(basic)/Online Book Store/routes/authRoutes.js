import { Router } from "express";
import { AuthUsersController } from "../controllers/auth.users.controller.js";
const authRouter = Router() 
const authUser = new AuthUsersController()

authRouter.post("/register", async (req,res)=>{
    await authUser.registerUser(req,res)
})

authRouter.post("/login", async (req,res)=>{
    await authUser.loginUser(req,res)
})

authRouter.post("/logout", async(req, res)=>{
    await authUser.logoutUser(req,res)
})



export default authRouter