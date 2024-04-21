import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
export declare class ExpensesService {
    private expenseRepository;
    constructor(expenseRepository: Repository<Expense>);
    getExpenses(): Promise<Expense[]>;
    findExpense(id: string): Promise<Expense>;
    createExpense(expense: ExpenseCreateDTO): Promise<Expense>;
    updateExpense(update: ExpenseUpdateDTO, id: string): Promise<Expense>;
}
