import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, UseGuards } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dtos/create.author';
import { UpdateAuthorDTO } from './dtos/update.author';
import { AuthGuard } from 'src/auth/auth.guard';



@UseGuards(AuthGuard)
@Controller('author')
export class AuthorController {

    constructor(private readonly authorService: AuthorService){ }


    @Post()
    @HttpCode(201)

    async createAuthor(@Body() author: CreateAuthorDTO){
       return await this.authorService.createAuthor(author)
    }

    @Get()
    async getAuthor(){

        return await this.authorService.getAuthor()
    }

    @Put(':id')
    async updateAuthor(@Param('id') id: string, @Body()update: UpdateAuthorDTO){
         return await this.authorService.updateAuthor(id, update)
    }

    @Delete(':id')
    async deleteAuthor(@Param('id')id: string){
        return await this.authorService.deleteAuthor(id)
        
    }


}
