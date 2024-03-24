import UsersBooksModel from "../model/users.books.model.js";

export class UsersBooksController{
    constructor(){
        this.userModel = new UsersBooksModel()
    }  

    async newBook(req,res){
        try {
            const newBook = req.body
            if(!newBook.bookTitle){
                return res.send({message: "You must enter book title."})
            }
            const book = await this.userModel.addNewBook(newBook)
            res.send({message: "Book is added", book: book})
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

    async bookRemove(req, res){
        try {
            const bookTitle = req.params.bookTitle
            const books = await this.userModel.removeBook(bookTitle)
            res.send({message: `Book with title ${bookTitle} is removed`, removedBook: books.book, allBooks: books.newBooks})
        } catch (error) {
            res.status(404).send({message: error.message})
        }
    }

}