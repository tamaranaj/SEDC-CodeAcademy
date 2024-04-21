import { Budget } from "src/budget/budget.entity";
export declare class Income {
    id: string;
    amount: number;
    description: string;
    createdAt: Date;
    budget: Budget;
    budgetID: string;
}
