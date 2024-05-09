import { AuthorORMEntity } from "src/author/author.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: "Books"})
export class BookORMEntity{

    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    title: string

    @Column()
    description: string

    @Column()
    genre: string
  
    @ManyToOne(()=>AuthorORMEntity, (author)=> author.books)
    @JoinColumn({name: "authorID"})
    author: AuthorORMEntity

    @Column({
        nullable: false,
        type:'uuid'
    })
    authorID: string

    @Column()
    publisher: string

    @Column()
    isbn: number
}