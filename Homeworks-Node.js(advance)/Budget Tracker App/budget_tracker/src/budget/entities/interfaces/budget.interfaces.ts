import { generateID } from "src/budget/helperServices/generateID";


export interface Expense{
    amount: number;
    description: string;
}

export interface Income{
    amount: number;
    description: string;
}


export class ExpenseEntity implements Expense{
    id: string
    amount: number;
    description: string;
    constructor(amount: number, description: string){
        this.id = generateID()
        this.amount = amount
        this.description = description
        
    }
}
export class IncomeEntity implements Expense{
    id: string 
    amount: number;
    description: string;
    constructor(amount: number, description: string){
        this.id = generateID()
        this.amount = amount
        this.description = description
        
    }
}

export interface ExpInc{
    amount?: number ;
    description?: string 

}


