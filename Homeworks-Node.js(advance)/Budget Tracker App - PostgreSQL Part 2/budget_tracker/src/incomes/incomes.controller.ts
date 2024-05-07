import { Body, Controller, Get, HttpCode, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';


@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('incomes')
export class IncomesController {

    constructor(private readonly incomeService: IncomesService){ }

    @Get()
    async getIncomes(@Req()request: Request){
        const userId = request['user'].userID
        return await this.incomeService.getIncomes(userId)
    }

    @Get(':id') //income ID
    async findIncome(@Param('id')id :string, @Req() request: Request){
        const userId = request['user'].userID
       return await this.incomeService.findIncome(userId, id)
    }

    @Post()
    @HttpCode(201)
    async createIncome(@Body()income:IncomeCreateDTO, @Req() request: Request){
        const userId = request['user'].userID
        return await this.incomeService.createIncome(userId, income)
    }

    @Put(':id') //income ID
    async updateIncome(@Param('id') incomeId:string,@Body() update: IncomeUpdateDTO, @Req()request:Request){
        const userId = request['user'].userID
        return await this.incomeService.updateIncome(incomeId, userId, update)
    }
}
