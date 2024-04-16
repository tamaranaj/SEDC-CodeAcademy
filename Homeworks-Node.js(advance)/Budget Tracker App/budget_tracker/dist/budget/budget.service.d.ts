import { Budget, BudgetUpdate } from './entities/budget.entity';
import { BudgetCreation } from './entities/budget.entity';
export declare class BudgetService {
    private budgets;
    readBudgets(): Budget[];
    createBudget(budgetCreation: BudgetCreation): string;
    findByID(id: string): Budget;
    deleteByID(id: string): void;
    updateByID(id: string, budgetUpdate: BudgetUpdate): Budget;
}
