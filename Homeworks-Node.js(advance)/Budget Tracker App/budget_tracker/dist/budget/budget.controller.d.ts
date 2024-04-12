import { BudgetService } from "./budget.services";
export declare class BudgetController {
    private readonly budgetService;
    constructor(budgetService: BudgetService);
    listBudgets(): import("../interfaces/budget.interface").Budget[];
}
