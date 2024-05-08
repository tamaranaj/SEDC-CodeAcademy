import { ApiProperty } from "@nestjs/swagger"
import { IsNumber, IsOptional, IsPositive, IsString, MinLength } from "class-validator"


export class ExpenseUpdateDTO{
    @ApiProperty()
    @IsNumber()
    @IsPositive()
    amount: number

    @ApiProperty()
    @IsString()
    @IsOptional()
    @MinLength(5)
    description?: string
}