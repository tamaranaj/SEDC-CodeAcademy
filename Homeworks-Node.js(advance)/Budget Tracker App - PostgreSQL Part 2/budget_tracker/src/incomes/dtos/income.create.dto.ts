import { ApiProperty } from "@nestjs/swagger"
import { IsPositive, IsNotEmpty, IsNumber, IsString, MinLength, IsEnum } from "class-validator"
import { Currency } from "src/enums/currency.enum"

export class IncomeCreateDTO{
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