import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BookORMEntity } from './book.entity';
import { Repository } from 'typeorm';
import { CreateBookDTO } from './dtos/create.book';
import { AuthorORMEntity } from 'src/author/author.entity';

@Injectable()
export class BookService {

    constructor(@InjectRepository(BookORMEntity) private bookRepo: Repository<BookORMEntity>,
    @InjectRepository(AuthorORMEntity) private authorRepo: Repository<AuthorORMEntity>){ }

    async createBook(book: CreateBookDTO){

        const author = await this.authorRepo.findOne({where: {id: book.authorID}})
        if(!author){
            throw new NotFoundException(`Author with id: ${book.authorID} was not found`)
        }
        const newBook =  this.bookRepo.create(book)
        return await this.bookRepo.save(newBook)
    }


    async getBooks(){
        return await this.bookRepo.find({relations: ['author']})
    }

    async getById(id:string){
        const book = await this.bookRepo.findOne({where: {id: id}, relations : ["author"]})

        if(!book){
            throw new NotFoundException(`Book with id ${id} was not found`)
        }

        return book
    }


    async deleteBook(id:string){
        const book = await this.getById(id)
        if(!book){
            throw new NotFoundException(`Book with id: ${id} was not found`)
        }
        await this.bookRepo.delete(book)

        return {message: `Book with id ${id} was deleted.`}

        
    }
}
