import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { Expense } from 'src/expenses/expense.entity';
import { Income } from 'src/incomes/income.entity';
export declare class BudgetService {
    private budgetRepository;
    private expenseRepo;
    private incomeRepo;
    constructor(budgetRepository: Repository<Budget>, expenseRepo: Repository<Expense>, incomeRepo: Repository<Income>);
    getBudgets(): Promise<Budget[]>;
    findBudget(id: string): Promise<Budget>;
    createBudget(budget: BudgetCreateDTO): Promise<Budget>;
    updateBudget(id: string, update: BudgetUpdateDTO): Promise<Budget>;
    deleteBudget(id: string): Promise<{
        message: string;
        deletedBudget: Budget;
    }>;
    addIncome(incomeBalance: number, id: string): Promise<number | false>;
}
