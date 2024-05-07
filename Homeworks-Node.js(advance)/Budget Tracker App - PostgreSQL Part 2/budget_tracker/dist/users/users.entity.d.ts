import { Budget } from "src/budget/budget.entity";
export declare class UsersORMEntity {
    id: number;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    createdAt: Date;
    budget: Budget;
}
