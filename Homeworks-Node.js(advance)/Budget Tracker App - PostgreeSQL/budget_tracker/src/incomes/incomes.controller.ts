import { Body, Controller, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { Income } from './income.entity';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';

@Controller('incomes')
export class IncomesController {

    constructor(private readonly incomeService: IncomesService){ }

    @Get()
    getIncomes(){
        return this.incomeService.getIncomes()
    }

    @Get(':id')
    async findIncome(@Param('id')id :string){
       return await this.incomeService.findIncome(id)
    }

    @Post()
    @HttpCode(201)
    async createIncome(@Body()income:IncomeCreateDTO){
        return await this.incomeService.createIncome(income)
    }

    @Put(':id')
    async updateIncome(@Param('id') id:string,@Body() update: IncomeUpdateDTO){
        return await this.incomeService.updateIncome(id, update)
    }
}
