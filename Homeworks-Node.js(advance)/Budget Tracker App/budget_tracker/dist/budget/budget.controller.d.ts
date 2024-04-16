import { BudgetService } from './budget.service';
import { BudgetDTO } from './DTO/budgetCreate.DTO';
import { BudgetUpdateDTO } from './DTO/budgetUpdate.DTO';
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): import("./entities/budget.entity").Budget[];
    addBudget(reqBody: BudgetDTO): {
        message: string;
        budgetID: string;
    };
    findBudget(id: string): import("./entities/budget.entity").Budget;
    removeBudget(id: string): {
        message: string;
    };
    updateBudget(id: string, budgetUpdate: BudgetUpdateDTO): {
        updatedBudget: import("./entities/budget.entity").Budget;
    };
}
