import { AuthorORMEntity } from './author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDTO } from './dtos/create.author';
import { UpdateAuthorDTO } from './dtos/update.author';
import { BookORMEntity } from 'src/book/book.entity';
export declare class AuthorService {
    private authorRepo;
    private booksRepo;
    constructor(authorRepo: Repository<AuthorORMEntity>, booksRepo: Repository<BookORMEntity>);
    createAuthor(author: CreateAuthorDTO): Promise<AuthorORMEntity>;
    getAuthor(): Promise<AuthorORMEntity[]>;
    updateAuthor(id: string, update: UpdateAuthorDTO): Promise<{
        message: string;
    }>;
    deleteAuthor(id: string): Promise<{
        message: string;
    }>;
}
