import { Transform } from "class-transformer"
import { IsEnum, IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"

export class BudgetUpdateDTO{
    @IsOptional()
    @IsString()
    @MinLength(3)
    @Transform(({value})=>value.trim())
    firstName?: string

    @IsOptional()
    @IsString()
    @Transform(({value})=>value.trim())
    lastName?:string

    @IsOptional()
    @IsNumber()
    @IsPositive()
    balance?: number
    
}