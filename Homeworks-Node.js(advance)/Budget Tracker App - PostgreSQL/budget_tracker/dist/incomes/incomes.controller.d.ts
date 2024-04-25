import { IncomesService } from './incomes.service';
import { Income } from './income.entity';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
export declare class IncomesController {
    private readonly incomeService;
    constructor(incomeService: IncomesService);
    getIncomes(): Promise<Income[]>;
    findIncome(id: string): Promise<Income>;
    createIncome(income: IncomeCreateDTO): Promise<Income>;
    updateIncome(id: string, update: IncomeUpdateDTO): Promise<{
        message: string;
    }>;
}
