import { ExpensesService } from './expenses.service';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { Expense } from './expense.entity';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
export declare class ExpensesController {
    private readonly expenseService;
    constructor(expenseService: ExpensesService);
    getExpenses(): Promise<Expense[]>;
    findExpense(id: string): Promise<Expense>;
    createExpense(expense: ExpenseCreateDTO): Promise<Expense>;
    updateExpense(id: string, update: ExpenseUpdateDTO): Promise<Expense>;
}
