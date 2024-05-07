import { Body, Controller, Delete, Get, HttpCode, Post, Put, Req, UseGuards } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { Request } from 'express';
import { ApiBearerAuth } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService){ }

    @Get()
    async getBudgets(@Req()request: Request){
        const user = request['user'].userID
        const budget= await this.budgetService.getBudget(user)
        return budget
    }

    @Post()
    @HttpCode(201)
    async createBudget(@Body()budget: BudgetCreateDTO, @Req()request: Request){
        const user = request['user'].userID
        return await this.budgetService.createBudget(budget, user)
    }

    @Put()
    async updateBudget( @Body() update: BudgetUpdateDTO, @Req() request: Request){
        const user = request['user'].userID
        return await this.budgetService.updateBudget(update, user)
    }

    @Delete()
    async deleteBudget(@Req()request: Request){
        const user = request['user'].userID
        return await this.budgetService.deleteBudget(user)
                
    }
}
