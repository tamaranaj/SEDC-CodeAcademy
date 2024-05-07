import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
import { Budget } from 'src/budget/budget.entity';
export declare class ExpensesService {
    private expenseRepository;
    private budgetRepository;
    constructor(expenseRepository: Repository<Expense>, budgetRepository: Repository<Budget>);
    getExpenses(userId: number): Promise<Expense[]>;
    findExpense(user: number, expenseId: string): Promise<Expense>;
    createExpense(user: number, expense: ExpenseCreateDTO): Promise<Expense>;
    updateExpense(user: number, id: string, update: ExpenseUpdateDTO): Promise<{
        message: string;
    }>;
    findBudget(id: number): Promise<Budget>;
}
