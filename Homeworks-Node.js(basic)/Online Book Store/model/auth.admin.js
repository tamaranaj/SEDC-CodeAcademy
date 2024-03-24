import { readDeletedBooks, editBook } from "../services/admin.books.services.js";
import { findBookById } from "../services/public.books.services.js";

class AdminModel{
    async getDeletedBooks(){
        const books = await readDeletedBooks()
        return books
    }

    async updateBook(id, reqBody){
        await editBook(id, reqBody)
        const book = await findBookById(id)
        return book
    }
}


export default AdminModel