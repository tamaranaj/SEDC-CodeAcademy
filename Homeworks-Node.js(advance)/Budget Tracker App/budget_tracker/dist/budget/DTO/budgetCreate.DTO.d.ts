import { Currency } from "../entities/enums/currency.enum";
declare abstract class ExpenseDTO {
    amount: number;
    description: string;
}
export declare abstract class BudgetDTO {
    title: string;
    balance: number;
    currency: Currency;
    expenses: ExpenseDTO;
    incomes: ExpenseDTO;
}
export {};
