import { IsPositive, IsNumber, IsOptional, IsString, MinLength, IsEnum } from "class-validator"



export class IncomeUpdateDTO{
    
    @IsNumber()
    @IsPositive()
    amount: number

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}