import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDTO } from './dtos/create.book';
import { AuthGuard } from 'src/auth/auth.guard';


@UseGuards(AuthGuard)
@Controller('book')
export class BookController {

    constructor(private readonly bookService: BookService){ }

    @Post()
    async createBook(@Body()book: CreateBookDTO){
        return await this.bookService.createBook(book)
    }

    @Get()
    async getBooks(){
        return await this.bookService.getBooks()
    }

    @Get('byID/:id')
    async getBookByID(@Param('id')id: string){
        return await this.bookService.getById(id)
    }

    @Delete(':id')
    async deleteBook(@Param('id')id: string){
        return await this.bookService.deleteBook(id)
    }
}
