import path from "path"
import { errorEvent } from "../Events/errorEvents.js"
import { eventNames } from "../Events/errorEventNames.js"
import { readFile } from "./fs.services.js"


export const BOOKS_DB = path.join("db","books.db", "books_store.db.json")
export const DELETED_BOOKS = path.join("db","books.db", "deletedBooks.db.json")

export const getAllBooks = async()=>{
    try{
        const books = await readFile(BOOKS_DB)
        return books
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Can't read books")
    }
}


export const findBookById = async (id) =>{

    try {
        const books = await getAllBooks()
        const book = books.find((item) => item.id === id)
        if(!book){
            throw new Error("Book not found")
        }
        return book
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")
    }
}

export const findBookByTitle = async(title)=>{
    try {
        const books = await getAllBooks()
        const bookFound = books.filter(item => item.bookTitle === title)
        if(bookFound.length === 0){
            throw new Error("Book not found")
        }
        return bookFound
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")
    }
}


