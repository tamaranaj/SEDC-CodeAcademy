import { BookORMEntity } from "src/book/book.entity";
export declare class AuthorORMEntity {
    id: string;
    firstName: string;
    lastName: string;
    from: string;
    birthDate: string;
    books: BookORMEntity[];
}
