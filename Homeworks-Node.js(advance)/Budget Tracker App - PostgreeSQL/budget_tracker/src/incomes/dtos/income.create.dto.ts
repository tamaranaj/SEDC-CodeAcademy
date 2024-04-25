import { IsPositive, IsNotEmpty, IsNumber, IsString, MinLength, IsUUID, IsEnum } from "class-validator"
import { Currency } from "src/enums/currency.enum"

export class IncomeCreateDTO{
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