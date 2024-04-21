import { IsPositive, IsNotEmpty, IsNumber, IsString, MinLength, IsUUID } from "class-validator"

export class IncomeCreateDTO{
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    budgetID: string
}