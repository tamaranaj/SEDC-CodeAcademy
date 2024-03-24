import { Router } from "express";
import { PublicBooksController } from "../controllers/public.books.controller.js";
const publicRouter = Router ()
const booksController = new PublicBooksController()


publicRouter.get("/books", async(req,res)=>{
    booksController.getAllBooks(req,res)
})

publicRouter.get("/books/:id", async (req, res)=>{
    booksController.getBookById(req,res)
})

publicRouter.get("/findbook/:title", async(req,res)=>{
    booksController.getBookByTitle(req,res)
})


export default publicRouter