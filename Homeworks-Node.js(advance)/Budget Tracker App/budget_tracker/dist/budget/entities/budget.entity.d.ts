import { Currency } from "./enums/currency.enum";
import { ExpenseEntity, IncomeEntity, ExpInc } from "./interfaces/budget.interfaces";
export declare class BudgetCreation {
    title: string;
    balance: number;
    currency: Currency;
    expenses: ExpenseEntity[];
    incomes: IncomeEntity[];
    constructor(title: string, balance: number, currency: Currency);
    addExInc(exp: ExpenseEntity, inc: IncomeEntity): void;
}
export declare class Budget extends BudgetCreation {
    id: string;
    createdAt: number;
    updatedAt?: number;
    constructor(title: string, balance: number, currency: Currency, expenses: ExpenseEntity[], incomes: IncomeEntity[]);
}
export declare class BudgetUpdate {
    title?: string;
    balance?: number;
    currency?: Currency;
    expenses?: ExpInc;
    incomes?: ExpInc;
    constructor(title?: string, balance?: number, currency?: Currency, expenses?: ExpInc, incomes?: ExpInc);
}
