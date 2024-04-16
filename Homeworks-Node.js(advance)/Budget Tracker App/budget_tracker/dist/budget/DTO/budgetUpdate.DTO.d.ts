import { Currency } from "../entities/enums/currency.enum";
declare abstract class IncDTO {
    amount: number;
    description: string;
}
export declare class BudgetUpdateDTO {
    title?: string;
    balance?: number;
    currency?: Currency;
    expenses?: IncDTO;
    incomes?: IncDTO;
}
export {};
