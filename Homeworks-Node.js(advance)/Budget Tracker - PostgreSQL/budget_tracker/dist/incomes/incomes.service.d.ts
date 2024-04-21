import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
export declare class IncomesService {
    private incomeRepository;
    constructor(incomeRepository: Repository<Income>);
    getIncomes(): Promise<Income[]>;
    findIncome(id: string): Promise<Income>;
    createIncome(income: IncomeCreateDTO): Promise<Income>;
    updateIncome(id: string, update: IncomeUpdateDTO): Promise<Income>;
}
