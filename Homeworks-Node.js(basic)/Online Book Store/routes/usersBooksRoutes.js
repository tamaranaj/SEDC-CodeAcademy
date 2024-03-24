import { Router } from "express";
import { UsersBooksController } from "../controllers/users.books.controller.js"
import { authenticate, authorizeUsers } from "../middlewares/auth.middleware.js";

const userBooksRouter = Router() 
const userController = new UsersBooksController()

userBooksRouter.post("/books",authenticate,authorizeUsers, async(req,res)=>{
    userController.newBook(req,res)
})

userBooksRouter.delete("/books/:bookTitle",authenticate,authorizeUsers, async(req,res)=>{
    userController.bookRemove(req,res)

})


export default userBooksRouter