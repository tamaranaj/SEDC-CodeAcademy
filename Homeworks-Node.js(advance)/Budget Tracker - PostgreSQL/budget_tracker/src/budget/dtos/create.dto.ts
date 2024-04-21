import { Currency } from "src/enums/currency.enum"
import { Transform } from "class-transformer"
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from "class-validator"

export class BudgetCreateDTO{
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @Transform(({value})=>value.trim())
    firstName: string

    @IsString()
    @IsNotEmpty()
    @Transform(({value})=>value.trim())
    lastName:string

    @IsNumber()
    @IsPositive()
    balance: number

    @IsEnum(Currency)
    currency: Currency
    
}