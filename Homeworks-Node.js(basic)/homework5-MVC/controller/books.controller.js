import { Model } from "../model/books.model.js";
export class Controller{
    constructor(){
        this.booksModel = new Model()

    }

    async getBooks(req,res){
         
        try{
            const books =  await this.booksModel.printBooks()

            res.send({allBooks: books})
        }catch(error){
            res.status(404).send({message: error.message})
        }
    }

    async getBookById(req,res){

        try{
            const id = req.params.id
            const book = await this.booksModel.bookById(id)
            res.send({bookById: book})
        }catch(error){
            res.status(404).send({message: error.message})
        }
    }

    async getBookByTitle(req,res){
        try{
            const title = req.params.title
            const book = await this.booksModel.bookByTitle(title)
            res.send({bookFound: book})
        }catch(error){
            
            res.status(404).send({message: error.message})
        }

    }

    async newBook(req,res){
        try{
            const reqBody = req.body

            const book = await this.booksModel.addNewBook(reqBody)

            res.status(201).send({message: "The book is added", newBook: book})
        }catch(error){

            res.status(400).send({message: error.message})
        }

    }


    async editBook(req,res){
        try{
            const reqBody = req.body
            const id = req.params.id
            const book = await this.booksModel.updateBook(id,reqBody)

            if(!book){
                throw new Error("Book not exist.")
            }
            res.send({message: `The book with id ${id} is updated`, book: book})
        }catch(error){
            res.status(404).send({message: error.message})
        }
    }


    async removingBook (req,res){

        try{
            const bookTitle = req.params.bookTitle
            const result = await this.booksModel.removeBook(bookTitle)
            res.send({message: `The book with title ${bookTitle} is deleted`, deletedBook: result.deletedBook, books: result.newBooks})
        }catch(error){
            res.status(404).send({message: error.message})
        }
    }
}