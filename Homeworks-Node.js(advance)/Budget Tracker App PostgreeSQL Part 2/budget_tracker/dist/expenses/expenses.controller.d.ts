import { ExpensesService } from './expenses.service';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
import { Request } from 'express';
export declare class ExpensesController {
    private readonly expenseService;
    constructor(expenseService: ExpensesService);
    getExpenses(request: Request): Promise<import("./expense.entity").Expense[]>;
    findExpense(id: string, request: Request): Promise<import("./expense.entity").Expense>;
    createExpense(expense: ExpenseCreateDTO, request: Request): Promise<import("./expense.entity").Expense>;
    updateExpense(id: string, update: ExpenseUpdateDTO, request: Request): Promise<{
        message: string;
    }>;
}
