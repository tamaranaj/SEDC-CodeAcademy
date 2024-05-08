import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { Budget } from 'src/budget/budget.entity';
export declare class IncomesService {
    private incomeRepository;
    private budgetRepository;
    constructor(incomeRepository: Repository<Income>, budgetRepository: Repository<Budget>);
    getIncomes(id: number): Promise<Income[]>;
    findIncome(userId: number, incomeId: string): Promise<Income>;
    createIncome(userId: number, income: IncomeCreateDTO): Promise<Income>;
    updateIncome(incomeId: string, userId: number, update: IncomeUpdateDTO): Promise<{
        message: string;
    }>;
    findBudget(userId: number): Promise<Budget>;
}
