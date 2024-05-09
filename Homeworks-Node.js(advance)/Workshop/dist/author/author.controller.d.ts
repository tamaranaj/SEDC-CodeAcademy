import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dtos/create.author';
import { UpdateAuthorDTO } from './dtos/update.author';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    createAuthor(author: CreateAuthorDTO): Promise<import("./author.entity").AuthorORMEntity>;
    getAuthor(): Promise<import("./author.entity").AuthorORMEntity[]>;
    updateAuthor(id: string, update: UpdateAuthorDTO): Promise<{
        message: string;
    }>;
    deleteAuthor(id: string): Promise<{
        message: string;
    }>;
}
