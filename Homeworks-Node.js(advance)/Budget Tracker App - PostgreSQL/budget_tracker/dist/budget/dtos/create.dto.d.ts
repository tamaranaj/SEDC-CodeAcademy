import { Currency } from "src/enums/currency.enum";
export declare class BudgetCreateDTO {
    firstName: string;
    lastName: string;
    balance?: number;
    currency: Currency;
}
