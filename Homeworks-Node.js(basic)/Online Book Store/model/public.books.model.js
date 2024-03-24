import {
  getAllBooks,
  findBookById,
  findBookByTitle
} from "../services/public.books.services.js";

class PublicBooksModel{
  async getAllBooks(){
    const books = await getAllBooks()
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
}
export default PublicBooksModel