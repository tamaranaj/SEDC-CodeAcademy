export class Book{
    constructor(id, bookTitle, isAvailable, genre, author, pages){

        this.id = id
        this.bookTitle = bookTitle
        this.isAvailable = !isAvailable ? false : isAvailable
        this.genre = !genre ? "unknown" : genre
        this.author = !author ? "unknown" : author
        this.pages = !pages ? "unknown" : pages
    }
}