import { Body, Controller, Get, HttpCode, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
import { Request } from 'express';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';


@UseGuards(AuthGuard)
@ApiBearerAuth()
@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expenseService: ExpensesService){ }

    @Get()
    async getExpenses(@Req()request:Request){
        const user = request['user'].userID
        return await this.expenseService.getExpenses(user)
    }

    @Get(':id') //expense ID
    async findExpense(@Param('id') id: string, @Req() request: Request){
        const user = request['user'].userID
        return await this.expenseService.findExpense(user, id)
    }

    @Post()
    @HttpCode(201)
    async createExpense(@Body() expense: ExpenseCreateDTO, @Req()request: Request){
        const user = request['user'].userID
        return await this.expenseService.createExpense(user,expense)
    }

    @Put(":id") //expense ID
    async updateExpense(@Param('id') id: string, @Body()update: ExpenseUpdateDTO, @Req()request: Request){
        const user = request['user'].userID
        return await this.expenseService.updateExpense(user, id, update)
    }
}
