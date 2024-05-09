import { IsOptional, IsString } from "class-validator"


export class UpdateAuthorDTO{

    @IsOptional()
    @IsString()
    lastName: string


    @IsOptional()
    @IsString()
    from: string
}