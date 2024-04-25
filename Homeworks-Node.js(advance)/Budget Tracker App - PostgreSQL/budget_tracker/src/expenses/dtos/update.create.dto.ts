import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"


export class ExpenseUpdateDTO{
    
    @IsNumber()
    @IsPositive()
    amount: number

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}