import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNotEmpty, IsNumber, IsPositive, IsString, MinLength } from "class-validator"
import { Currency } from "src/enums/currency.enum"



export class ExpenseCreateDTO{
    @ApiProperty()
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number

    @ApiProperty({enum: Currency, examples: ['MKD', 'EUR', 'USD']})
    @IsEnum(Currency)
    currency: Currency

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(5)
    description: string

}