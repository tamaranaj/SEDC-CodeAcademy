import { getAllBooks, findBookById, addBook, deleteBook, editBook, findBookByTitle } from "../services/books.services.js";
import { Book } from "../entities/book.entity.js";
import { v4 as uuidv4 } from 'uuid';

export class Model{
    
    async printBooks(){

        const books = await getAllBooks()

        if(!books){
            throw new Error("Cant read books")
        }

        return books
    }

    async bookById(id){
        const book = await findBookById(id)
       
        return book
    }

    async bookByTitle(title){
        const book = await findBookByTitle(title)      
        return book
        
    }

    async addNewBook(reqBook){
        const id = uuidv4()

        const newBook = new Book(
            id,
            reqBook.bookTitle,
            reqBook.isAvailable,
            reqBook.genre, 
            reqBook.author,
            reqBook.pages
        )
        await addBook (newBook)
        return newBook
    }


    async updateBook(id,reqBody){

        await editBook(id,reqBody)
        const book = await findBookById(id)
        return book
    }

    async removeBook(book){

        const result = await deleteBook(book)
        return result

    }
}