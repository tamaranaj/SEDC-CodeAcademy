import { Router } from "express";
import { getAllBooks, findBook, addBook, deleteBook, editBook} from "../services/books.services.js";
import { Book } from "../entities/book.entity.js";
import { v4 as uuidv4 } from 'uuid';
const booksRouter = Router ()

booksRouter.get("/books", async(req, res)=>{
    try{
        const books = await getAllBooks()
        res.send(books)
    }catch(error){
        res.status(404).send({message: error.message})
    }
})

booksRouter.get("/books/:id", async (req, res)=>{
    try{
        const id = req.params.id
        const result =  await findBook(id)
        if(!result){
            return res.status(404).send("<h1>Book not found!</h1>")
        }
        res.send(result)
    }catch(error){
        res.status(404).send({message: error.message})
    }
})


booksRouter.post("/books", async (req, res)=>{
    try{
        const reqBook = req.body
        const id = uuidv4()
        const newBook = new Book(
            id,reqBook.bookTitle, reqBook.isAvailable, reqBook.genre, reqBook.author,reqBook.pages
        )
        await addBook(newBook)

        res.status(201).send({message: "The book is added", book: newBook})
    }catch(error){
        res.status(404).send({message: error.message})
    }
})



booksRouter.delete("/books/:bookTitle",async(req,res)=>{
    try{
        const bookTitle = req.params.bookTitle
        console.log(bookTitle)
        
        const result = await deleteBook(bookTitle)
        res.send({message: `The book with title ${bookTitle} is deleted`, deletedBook: result.deletedBook, books: result.newBooks})
    }catch(error){
        res.status(404).send({message: error.message})
    }

})

booksRouter.put("/books/:id",async(req,res)=>{
    try{
        const id = req.params.id
        const reqBody = req.body
        await editBook(id, reqBody)
        const book = await findBook(id)
        
        res.send({message: `The book with id ${id} is updated`, book: book})

    }catch(error){
        res.status(404).send({message: error.message})
    }
})

export default booksRouter