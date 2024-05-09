import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthorORMEntity } from './author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDTO } from './dtos/create.author';
import { UpdateAuthorDTO } from './dtos/update.author';
import { BookORMEntity } from 'src/book/book.entity';

@Injectable()
export class AuthorService {

    constructor(@InjectRepository(AuthorORMEntity) private authorRepo: Repository<AuthorORMEntity>, @InjectRepository(BookORMEntity) private booksRepo: Repository<BookORMEntity>){ }

    async createAuthor(author: CreateAuthorDTO){
        const check = await this.authorRepo.findOne({where: {lastName: author.lastName}})
        if (check){
            throw new HttpException(`Author already exist`, 403)
        }
        const newAuthor = this.authorRepo.create(author)
        return await this.authorRepo.save(newAuthor)
        
    }


    async getAuthor(){
       const authors = await this.authorRepo.find({relations: ["books"]})
       return authors
    }
    


    async updateAuthor(id: string,update: UpdateAuthorDTO){
        const author = await this.authorRepo.findOne({where: {id : id}})
        if(!author){
            throw new NotFoundException(`Author with id: ${id} was not found`)
        }

        const updatedAuthor = this.authorRepo.merge(author, update)
        await this.authorRepo.save(updatedAuthor)
        return {message: `Author with id ${id} is success updated.`}
    }


    async deleteAuthor(id: string){
        const author = await this.authorRepo.findOne({where: {id : id}})
        if(!author){
            throw new NotFoundException(`Author with id: ${id} was not found`)
        }

        const books = await this.booksRepo.find({where: {authorID: id}})
        books.forEach(item=> this.booksRepo.delete(item))
        this.authorRepo.delete(author)
        return {message: `Author is deleted`}
    }
}
