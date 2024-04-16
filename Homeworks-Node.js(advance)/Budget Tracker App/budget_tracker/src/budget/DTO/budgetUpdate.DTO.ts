import { Currency } from "../entities/enums/currency.enum";
import { IsNumber, IsPositive, IsString, MinLength, IsEnum, ValidateNested } from "class-validator";
import { Type } from "class-transformer";

abstract class IncDTO{
    
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsString()
    @MinLength(5)
    description: string;
}

export class BudgetUpdateDTO{
    @IsString()
    @MinLength(3)
    title?: string ;

    @IsNumber()
    @IsPositive()
    balance?: number ;

    @IsEnum(Currency)
    currency?: Currency;

    @ValidateNested()
    @Type(()=>IncDTO)
    expenses?: IncDTO;

    @ValidateNested()
    @Type(()=>IncDTO)
    incomes?: IncDTO;
    
}