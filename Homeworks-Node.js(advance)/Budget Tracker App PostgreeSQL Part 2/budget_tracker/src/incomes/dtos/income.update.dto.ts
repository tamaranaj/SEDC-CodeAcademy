import { ApiProperty } from "@nestjs/swagger"
import { IsPositive, IsNumber, IsOptional, IsString, MinLength } from "class-validator"

export class IncomeUpdateDTO{
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