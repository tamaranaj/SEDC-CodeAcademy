import fsPromises from "fs/promises"
import path from "path"
import {errorEvent} from "../allEvents/errorEvents.js"
import { eventNames } from "../allEvents/events.js"

const BOOKS_DB = path.join("Db","books_store.db.json")
const DELETED_BOOKS= path.join("Db", "deletedBooks.txt")


export const getAllBooks = async ()=>{
    try{
        const resultJson= await fsPromises.readFile(BOOKS_DB, {encoding: "utf-8"})
        const result = JSON.parse(resultJson)
        return result
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Can't read books")
    }
}

export const findBook = async(id)=>{
    try{
        const books = await getAllBooks()
        const book = books.find(item=>item.id == id)
        if(!book){
            throw new Error()
        }
        return book
        
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")
    }
}

export const addBook = async(book)=>{
    try{
        const books = await getAllBooks()
        const newBooks = [...books, book]
        await fsPromises.writeFile(BOOKS_DB,JSON.stringify(newBooks,null,2))
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Can't add new book")
    }
}

export const deleteBook = async(bookTitle)=>{
    try{
        const books = await getAllBooks()
        const newBooks = books.filter(item=> item.bookTitle != bookTitle) 
        const deletedBook = books.filter(item=>item.bookTitle == bookTitle)
        if(!deletedBook){
            throw new Error()
        }
        await fsPromises.writeFile(BOOKS_DB,JSON.stringify(newBooks,null,2))
        await fsPromises.appendFile(DELETED_BOOKS,JSON.stringify(deletedBook,null,2))
        return {newBooks, deletedBook}
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")
    }
}

export const editBook = async(id, book)=>{

    try{
        const books = await getAllBooks()
        const updatedBooks = books.map((item)=>{
            if(item.id === id){
                return{
                    id : item.id,
                    bookTitle: !book.bookTitle ? item.bookTitle : book.bookTitle,
                    isAvailable: !book.isAvailable ? item.isAvailable : book.isAvailable ,
                    genre: !book.genre ? item.genre : book.genre,
                    author: !book.author ? item.author : book.author,
                    pages: !book.pages ? item.pages : book.pages
                }
            }else{
                return item
            }
        })
        const finding = books.find(item=>item.id == id)
        if(!finding){
            throw new Error ()
            
        }else{
            await fsPromises.writeFile(BOOKS_DB,JSON.stringify(updatedBooks, null, 2))
        }
              
    }catch(error){
        errorEvent.emit(eventNames.ERROR_EVENTS, error)
        throw new Error("Book not found")

    }
}