import { Router } from "express";
import { Controller } from "../controller/books.controller.js";
const booksRouter = Router ()
const booksController = new Controller()

booksRouter.get("/books", async(req, res)=>{
    booksController.getBooks(req,res)
})

booksRouter.get("/books/:id", async (req, res)=>{
    booksController.getBookById(req,res)
    
})

booksRouter.get("/findbook/:title",async (req, res) => {
    console.log(req.params.title)
    booksController.getBookByTitle(req, res)

})


booksRouter.post("/books", async (req, res)=>{
    booksController.newBook(req,res)
})


booksRouter.delete("/books/:bookTitle",async(req,res)=>{
    booksController.removingBook(req,res)

})

booksRouter.put("/books/:id",async(req,res)=>{
    booksController.editBook(req,res)
})

export default booksRouter