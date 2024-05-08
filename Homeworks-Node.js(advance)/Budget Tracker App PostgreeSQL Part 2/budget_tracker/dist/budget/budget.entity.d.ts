import { Currency } from "src/enums/currency.enum";
import { Expense } from "src/expenses/expense.entity";
import { Income } from "src/incomes/income.entity";
import { UsersORMEntity } from "src/users/users.entity";
export declare class Budget {
    id: string;
    balance: number;
    currency: Currency;
    expenses: Expense[];
    incomes: Income[];
    user: UsersORMEntity;
    createdAt: Date;
    updatedAt: Date;
}
