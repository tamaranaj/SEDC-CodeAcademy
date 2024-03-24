import { errorEvent } from "../Events/errorEvents.js";
import { eventNames } from "../Events/errorEventNames.js";
import { writeFile, readFile } from "./fs.services.js";
import { BOOKS_DB, DELETED_BOOKS, getAllBooks, findBookByTitle, findBookById } from "./public.books.services.js";
import path from "path"

export const USERS_DB = path.join("db", "users.db","users.json")

export const addUser = async(user)=>{
    const users = await readFile(USERS_DB)
    users.push(user)
    await writeFile(USERS_DB,users)
}


export const addBook = async (book) => {
    try {
        const books = await getAllBooks()
        const newBooks = [...books,book]
        await writeFile(BOOKS_DB, newBooks)
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Can't add new book")
    }

}

export const deleteBook = async (bookTitle) => {

    try {
        const books = await getAllBooks()
        const book = await findBookByTitle(bookTitle)
        
        if(book.length === 0){
            throw new Error("Book not found")
        }
        const newBooks = books.filter((item) => item.bookTitle !== bookTitle)
        
        const deletedBooksDb = await readFile(DELETED_BOOKS)
        const newDeletedBooks = [...deletedBooksDb,book]
        await writeFile(DELETED_BOOKS,newDeletedBooks)
        await writeFile(BOOKS_DB,newBooks)
        return{newBooks, book}
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not foundsss")
    }
}



