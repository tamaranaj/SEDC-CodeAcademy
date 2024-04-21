import { IsNegative, IsNotEmpty, IsNumber, IsString, MinLength } from "class-validator"



export class ExpenseCreateDTO{
    @IsNotEmpty()
    @IsNumber()
    @IsNegative()
    amount: number

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string

    @IsString()
    @IsNotEmpty()
    budgetID: string
}