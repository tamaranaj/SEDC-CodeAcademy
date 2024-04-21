import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { Expense } from './expense.entity';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';

@Controller('expenses')
export class ExpensesController {

    constructor(private readonly expenseService: ExpensesService){ }

    @Get()
    getExpenses():Promise<Expense[]>{
        return this.expenseService.getExpenses()
    }

    @Get(':id')
    findExpense(@Param('id') id: string): Promise<Expense>{
        return this.expenseService.findExpense(id)
    }

    @Post()
    createExpense(@Body() expense: ExpenseCreateDTO): Promise<Expense>{

        return this.expenseService.createExpense(expense)
    }

    @Put(":id")
    updateExpense(@Param('id') id: string, @Body()update: ExpenseUpdateDTO): Promise<Expense>{
        return this.expenseService.updateExpense(update,id)
    }
}
