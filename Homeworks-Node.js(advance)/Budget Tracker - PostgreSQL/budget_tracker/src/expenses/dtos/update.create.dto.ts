import { IsNegative, IsNumber, IsOptional, IsString, MinLength } from "class-validator"


export class ExpenseUpdateDTO{
    @IsOptional()
    @IsNumber()
    @IsNegative()
    amount?: number

    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}