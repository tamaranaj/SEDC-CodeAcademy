import { IsNotEmpty, IsNumber, IsString, IsUUID } from "class-validator";


export class CreateBookDTO{

    @IsNotEmpty()
    @IsString()
    title: string

    @IsNotEmpty()
    @IsString()
    description: string

    @IsNotEmpty()
    @IsString()
    genre: string

    @IsNotEmpty()
    @IsUUID()
    authorID: string

    @IsNotEmpty()
    @IsString()
    publisher: string

    @IsNotEmpty()
    @IsNumber()
    isbn:number

}