import { BookService } from './book.service';
import { CreateBookDTO } from './dtos/create.book';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(book: CreateBookDTO): Promise<import("./book.entity").BookORMEntity>;
    getBooks(): Promise<import("./book.entity").BookORMEntity[]>;
    getBookByID(id: string): Promise<import("./book.entity").BookORMEntity>;
    deleteBook(id: string): Promise<{
        message: string;
    }>;
}
