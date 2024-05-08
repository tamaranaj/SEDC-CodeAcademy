import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEmail, IsEnum, IsNotEmpty, IsString } from "class-validator";

export enum Roles{

    admin= "Admin",
    user= "User"
}

export class SignUpDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    firstName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    lastName: string

    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    email: string

    @ApiProperty()
    @IsNotEmpty()
    @IsString()
    password: string

    @ApiProperty({enum: Roles, examples: ['Admin', 'User']})
    @IsNotEmpty()
    @IsEnum(Roles)
    role: string

}

