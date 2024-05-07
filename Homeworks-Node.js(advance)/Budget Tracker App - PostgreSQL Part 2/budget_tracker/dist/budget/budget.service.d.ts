import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { Expense } from 'src/expenses/expense.entity';
import { Income } from 'src/incomes/income.entity';
import { UsersService } from 'src/users/users.service';
export declare class BudgetService {
    private budgetRepository;
    private expenseRepo;
    private incomeRepo;
    private usersService;
    constructor(budgetRepository: Repository<Budget>, expenseRepo: Repository<Expense>, incomeRepo: Repository<Income>, usersService: UsersService);
    getBudget(userID: number): Promise<Budget>;
    findBudget(id: string): Promise<Budget>;
    createBudget(budget: BudgetCreateDTO, user: number): Promise<Budget | {
        message: string;
    }>;
    updateBudget(update: BudgetUpdateDTO, userID: number): Promise<Budget>;
    deleteBudget(userID: number): Promise<{
        message: string;
        deletedBudget: Budget;
    }>;
}
