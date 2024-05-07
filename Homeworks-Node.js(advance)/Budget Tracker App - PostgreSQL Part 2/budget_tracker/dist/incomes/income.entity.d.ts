import { Budget } from "src/budget/budget.entity";
import { Currency } from "src/enums/currency.enum";
export declare class Income {
    id: string;
    amount: number;
    currency: Currency;
    description: string;
    createdAt: Date;
    updatedAt: Date;
    budget: Budget;
    budgetID: string;
}
