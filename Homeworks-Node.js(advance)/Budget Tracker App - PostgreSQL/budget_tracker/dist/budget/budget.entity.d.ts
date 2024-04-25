import { Currency } from "src/enums/currency.enum";
import { Expense } from "src/expenses/expense.entity";
import { Income } from "src/incomes/income.entity";
export declare class Budget {
    id: string;
    firstName: string;
    lastName: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
}
