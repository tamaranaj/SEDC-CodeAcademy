import { readFile, writeFile } from "./fs.services.js";
import { getAllBooks, findBookById, BOOKS_DB, DELETED_BOOKS } from "./public.books.services.js";
import { errorEvent } from "../Events/errorEvents.js";
import { eventNames } from "../Events/errorEventNames.js";


export const editBook = async (id, book) => {

    try {
        const books = await getAllBooks()
        const bookForEdit = await findBookById(id)
        if(!bookForEdit){
            throw new Error("Book not found")
        }
        const updatedBooks = books.map((item) => {
            if(item.id === id){
                return{
                    id: item.id,
                    bookTitle: !book.bookTitle ? item.bookTitle : book.bookTitle,
                    isAvailable: !book.isAvailable ? item.isAvailable : book.isAvailable,
                    genre: !book.genre ? item.genre : book.genre,
                    author: !book.author ? item.author : book.author,
                    pages: !book.pages ? item.pages : book.pages
                }
            }else{
                return item
            }
        })

        await writeFile(BOOKS_DB, updatedBooks)
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")
    }
}


export const readDeletedBooks = async()=>{
    try {
        const deletedBooks = await readFile(DELETED_BOOKS)
        return deletedBooks
    } catch (error) {
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Error while getting books")
    }
}