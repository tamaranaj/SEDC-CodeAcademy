import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class SignInDTO{
    @ApiProperty({default: "mail123@mail.com"})
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty({default: "mail123"})
    @IsNotEmpty()
    @IsString()
    password: string
}