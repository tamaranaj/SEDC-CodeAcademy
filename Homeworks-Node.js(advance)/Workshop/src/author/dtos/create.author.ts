import { IsNotEmpty, IsString } from "class-validator";



export class CreateAuthorDTO{

    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string


    @IsNotEmpty()
    @IsString()
    from: string

    @IsNotEmpty()
    @IsString()
    birthDate: string


}