import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
import { Budget } from 'src/budget/budget.entity';
export declare class ExpensesService {
    private expenseRepository;
    private budgetRepository;
    constructor(expenseRepository: Repository<Expense>, budgetRepository: Repository<Budget>);
    getExpenses(): Promise<Expense[]>;
    findExpense(id: string): Promise<Expense>;
    createExpense(expense: ExpenseCreateDTO): Promise<Expense>;
    updateExpense(update: ExpenseUpdateDTO, id: string): Promise<{
        message: string;
    }>;
    findBudget(id: string): Promise<Budget>;
}
