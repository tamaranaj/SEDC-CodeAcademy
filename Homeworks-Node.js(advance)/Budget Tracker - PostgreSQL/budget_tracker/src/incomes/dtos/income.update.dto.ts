import { IsPositive, IsNumber, IsOptional, IsString, MinLength } from "class-validator"


export class IncomeUpdateDTO{
    @IsOptional()
    @IsNumber()
    @IsPositive()
    amount?: number

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}