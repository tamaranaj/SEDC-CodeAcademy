import { AuthorORMEntity } from "src/author/author.entity";
export declare class BookORMEntity {
    id: string;
    title: string;
    description: string;
    genre: string;
    author: AuthorORMEntity;
    authorID: string;
    publisher: string;
    isbn: number;
}
