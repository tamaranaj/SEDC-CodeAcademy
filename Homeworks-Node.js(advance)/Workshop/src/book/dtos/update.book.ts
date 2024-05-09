import { IsNumber, IsOptional, IsString, IsUUID } from "class-validator";


export class UpdateBookDTO{

    @IsOptional()
    @IsString()
    title: string

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsString()
    genre: string

    @IsOptional()
    @IsNumber()
    isbn:number

}