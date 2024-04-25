import { BudgetService } from './budget.service';
import { BudgetCreateDTO } from './dtos/create.dto';
import { Budget } from './budget.entity';
import { BudgetUpdateDTO } from './dtos/update.dto';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    getBudgets(): Promise<Budget[]>;
    findBudget(id: string): Promise<Budget>;
    createBudget(budget: BudgetCreateDTO): Promise<Budget>;
    updateBudget(id: string, update: BudgetUpdateDTO): Promise<Budget | string>;
    deleteBudget(id: string): Promise<{
        message: string;
        deletedBudget: Budget;
    }>;
}
