import { Currency } from "../entities/enums/currency.enum";
import { IsNotEmpty, IsNumber, IsString, IsEnum, ValidateNested, IsPositive, MinLength } from "class-validator";
import { Type } from "class-transformer";

abstract class ExpenseDTO{
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    amount: number;

    @IsNotEmpty()
    @IsString()
    @MinLength(5)
    description: string;
}



export abstract class BudgetDTO{
    @IsNotEmpty()
    @IsString()
    @MinLength(3)
    title: string;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    balance: number;

    @IsNotEmpty()
    @IsEnum(Currency)
    currency: Currency;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=> ExpenseDTO)
    expenses: ExpenseDTO;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=> ExpenseDTO)
    incomes: ExpenseDTO;
}

