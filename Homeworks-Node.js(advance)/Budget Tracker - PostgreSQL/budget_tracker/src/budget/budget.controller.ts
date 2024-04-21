import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetCreateDTO } from './dtos/create.dto';
import { Budget } from './budget.entity';
import { BudgetUpdateDTO } from './dtos/update.dto';


@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService){ }

    @Get()
    getBudgets():Promise<Budget[]>{
        return this.budgetService.getBudgets()
    }

    @Get(':id')
    async findBudget(@Param('id') id:string): Promise<Budget>{
        return await this.budgetService.findBudget(id)
    }

    @Post()
    createBudget(@Body()budget: BudgetCreateDTO):Promise<Budget>{
        return this.budgetService.createBudget(budget)
    }

    @Put(':id')
    updateBudget(@Param('id') id:string, @Body() update: BudgetUpdateDTO): Promise<Budget>{
        return this.budgetService.updateBudget(id, update)
    }

    @Delete(':id')
    deleteBudget(@Param('id') id:string): Promise<string | Budget>{
        return this.budgetService.deleteBudget(id)
    }
}
