import { Currency } from "src/enums/currency.enum"
import { IsEnum, IsNumber, IsOptional, IsPositive } from "class-validator"
import { ApiProperty } from "@nestjs/swagger"

export class BudgetCreateDTO{
    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @IsPositive()
    balance?: number

    @ApiProperty({enum: Currency, examples: ['MKD', 'EUR', 'USD']})
    @IsEnum(Currency)
    currency: Currency
    
}