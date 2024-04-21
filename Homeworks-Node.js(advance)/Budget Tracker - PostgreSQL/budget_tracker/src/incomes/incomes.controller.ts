import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { Income } from './income.entity';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';

@Controller('incomes')
export class IncomesController {

    constructor(private readonly incomeService: IncomesService){ }

    @Get()
    getIncomes():Promise<Income[]>{
        return this.incomeService.getIncomes()
    }

    @Get(':id')
    findIncome(@Param('id')id :string):Promise<Income>{
        return this.incomeService.findIncome(id)
    }

    @Post()
    createIncome(@Body()income:IncomeCreateDTO): Promise<Income>{
        return this.incomeService.createIncome(income)
    }

    @Put(':id')
    updateIncome(@Param('id') id:string, update: IncomeUpdateDTO): Promise<Income>{
        return this.incomeService.updateIncome(id, update)
    }
}
