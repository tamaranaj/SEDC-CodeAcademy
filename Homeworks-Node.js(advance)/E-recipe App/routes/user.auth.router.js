import { Router } from "express"
import UserController from "../controllers/user.auth.controller.js"

const userRouter = Router()
const userController = new UserController()

//REGISTER ROUTE
userRouter.post("/register", async(req, res)=>{
    await userController.register(req, res)
})
//LOGIN ROUTE
userRouter.post("/login", async(req, res)=>{
    await userController.login(req, res)
})

export default userRouter