import { addBook,deleteBook} from "../services/users.books.services.js";
import { Book } from "../entities/book.entity.js"
import { v4 as uuid} from "uuid"

class UsersBooksModel{

    async addNewBook(reqBook){
        const id = uuid()
    
        const newBook = new Book(
          id,
          reqBook.bookTitle,
          reqBook.isAvailable,
          reqBook.genre,
          reqBook.author,
          reqBook.pages
        )
    
        await addBook(newBook)
        return newBook
    }
    
        
    async removeBook(book){
        const result = await deleteBook(book)
        return result
    }

   
}

export default UsersBooksModel