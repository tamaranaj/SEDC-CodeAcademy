import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, IsUUID, MinLength } from "class-validator"
import { Currency } from "src/enums/currency.enum"



export class ExpenseCreateDTO{
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number

    @IsEnum(Currency)
    currency: Currency

    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string

    @IsString()
    @IsNotEmpty()
    @IsUUID()
    budgetID: string
}