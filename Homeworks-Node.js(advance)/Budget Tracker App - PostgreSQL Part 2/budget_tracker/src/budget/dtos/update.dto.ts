import { ApiProperty } from "@nestjs/swagger"
import { IsEnum, IsNumber, IsOptional, IsPositive} from "class-validator"
import { Currency } from "src/enums/currency.enum"

export class BudgetUpdateDTO{
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    balance: number

    @ApiProperty({enum: Currency, examples: ['MKD', 'EUR', 'USD']})
    @IsOptional()
    @IsEnum(Currency)
    currency: Currency
    
}