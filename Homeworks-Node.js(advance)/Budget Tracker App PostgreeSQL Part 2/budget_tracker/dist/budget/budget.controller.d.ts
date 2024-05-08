import { BudgetService } from './budget.service';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { Request } from 'express';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    getBudgets(request: Request): Promise<import("./budget.entity").Budget>;
    createBudget(budget: BudgetCreateDTO, request: Request): Promise<import("./budget.entity").Budget | {
        message: string;
    }>;
    updateBudget(update: BudgetUpdateDTO, request: Request): Promise<import("./budget.entity").Budget>;
    deleteBudget(request: Request): Promise<{
        message: string;
        deletedBudget: import("./budget.entity").Budget;
    }>;
}
