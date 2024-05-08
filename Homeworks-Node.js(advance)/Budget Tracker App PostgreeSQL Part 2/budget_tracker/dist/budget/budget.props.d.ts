import { Currency } from "src/enums/currency.enum";
import { UsersORMEntity } from "src/users/users.entity";
export declare class BudgetProps {
    balance?: number;
    currency: Currency;
    user: UsersORMEntity;
    constructor(currency: Currency, user: UsersORMEntity, balance?: number);
}
