import { BookORMEntity } from "src/book/book.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "Authors"})
export class AuthorORMEntity{

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    from: string

    @Column()
    birthDate: string

    @OneToMany(()=>BookORMEntity, (books)=> books.author)
    books: BookORMEntity[]
}