import { Currency } from "src/enums/currency.enum";
export declare class ExpenseCreateDTO {
    amount: number;
    currency: Currency;
    description: string;
    budgetID: string;
}
