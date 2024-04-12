import { Currency } from "src/enums/currency.enum";
export interface Expense {
    id: string;
    amount: number;
    description: string;
}
export interface Income {
    id: string;
    amount: number;
    description: string;
}
export interface Budget {
    id: string;
    title: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
