export interface Expense {
    amount: number;
    description: string;
}
export interface Income {
    amount: number;
    description: string;
}
export declare class ExpenseEntity implements Expense {
    id: string;
    amount: number;
    description: string;
    constructor(amount: number, description: string);
}
export declare class IncomeEntity implements Expense {
    id: string;
    amount: number;
    description: string;
    constructor(amount: number, description: string);
}
export interface ExpInc {
    amount?: number;
    description?: string;
}
