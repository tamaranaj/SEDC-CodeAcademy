import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
export declare class BudgetService {
    private budgetRepository;
    constructor(budgetRepository: Repository<Budget>);
    getBudgets(): Promise<Budget[]>;
    findBudget(id: string): Promise<Budget>;
    createBudget(budget: BudgetCreateDTO): Promise<Budget>;
    updateBudget(id: string, update: BudgetUpdateDTO): Promise<Budget>;
    deleteBudget(id: string): Promise<string | Budget>;
}
