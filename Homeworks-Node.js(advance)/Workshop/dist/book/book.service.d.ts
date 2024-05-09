import { BookORMEntity } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDTO } from './dtos/create.book';
import { AuthorORMEntity } from 'src/author/author.entity';
export declare class BookService {
    private bookRepo;
    private authorRepo;
    constructor(bookRepo: Repository<BookORMEntity>, authorRepo: Repository<AuthorORMEntity>);
    createBook(book: CreateBookDTO): Promise<BookORMEntity>;
    getBooks(): Promise<BookORMEntity[]>;
    getById(id: string): Promise<BookORMEntity>;
    deleteBook(id: string): Promise<{
        message: string;
    }>;
}
