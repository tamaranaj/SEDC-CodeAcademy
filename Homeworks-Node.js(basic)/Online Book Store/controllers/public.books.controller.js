import PublicBooksModel from "../model/public.books.model.js";

export class PublicBooksController{
    constructor(){
        this.booksModel = new PublicBooksModel()
    }

    async getAllBooks(req,res){
        try {
            const books = await this.booksModel.getAllBooks()
            res.send({allBooks: books})
        } catch (error) {
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
        try {
            const title = req.params.title
            const book = await this.booksModel.bookByTitle(title)
            res.send({bookFound: book})
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

}   