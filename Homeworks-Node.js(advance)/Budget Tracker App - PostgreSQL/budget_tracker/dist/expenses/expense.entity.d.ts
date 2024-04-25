import { Budget } from "src/budget/budget.entity";
import { Currency } from "src/enums/currency.enum";
export declare class Expense {
    id: string;
    amount: number;
    currency: Currency;
    description: string;
    createdAt: Date;
    budget: Budget;
    budgetID: string;
}
