import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { Budget } from 'src/budget/budget.entity';
export declare class IncomesService {
    private incomeRepository;
    private budgetRepository;
    constructor(incomeRepository: Repository<Income>, budgetRepository: Repository<Budget>);
    getIncomes(): Promise<Income[]>;
    findIncome(id: string): Promise<Income>;
    createIncome(income: IncomeCreateDTO): Promise<Income>;
    updateIncome(id: string, update: IncomeUpdateDTO): Promise<{
        message: string;
    }>;
    findBudget(id: string): Promise<Budget>;
}
