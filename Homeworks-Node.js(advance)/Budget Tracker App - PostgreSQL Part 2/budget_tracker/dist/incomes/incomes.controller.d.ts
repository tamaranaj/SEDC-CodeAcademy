import { IncomesService } from './incomes.service';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { Request } from 'express';
export declare class IncomesController {
    private readonly incomeService;
    constructor(incomeService: IncomesService);
    getIncomes(request: Request): Promise<import("./income.entity").Income[]>;
    findIncome(id: string, request: Request): Promise<import("./income.entity").Income>;
    createIncome(income: IncomeCreateDTO, request: Request): Promise<import("./income.entity").Income>;
    updateIncome(incomeId: string, update: IncomeUpdateDTO, request: Request): Promise<{
        message: string;
    }>;
}
