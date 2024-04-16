import { generateID } from "../helperServices/generateID";
import { Currency } from "./enums/currency.enum";
import {  ExpenseEntity,  IncomeEntity, ExpInc } from "./interfaces/budget.interfaces";

export class BudgetCreation{
    title: string;
    balance: number;
    currency: Currency;
    expenses: ExpenseEntity[] ;
    incomes: IncomeEntity[] ;

    constructor(title: string,
        balance: number,
        currency: Currency,
        ){
            this.title = title
            this.balance = balance
            this.currency= currency
            this.expenses = []
            this.incomes = []
        }
    
    addExInc(exp: ExpenseEntity, inc : IncomeEntity){
        this.expenses.push(exp)
        this.incomes.push(inc)
    }

}

export class Budget extends BudgetCreation{
    id: string
    createdAt: number
    updatedAt?: number
    constructor(
        title: string,
        balance: number,
        currency: Currency,
        expenses: ExpenseEntity[],
        incomes: IncomeEntity[],
        ){
        super(title,balance, currency)
        this.expenses = expenses
        this.incomes = incomes
        this.id = generateID()
        this.createdAt = new Date().getTime()
    }
      
}

export class BudgetUpdate{
     
    title?: string ;
    balance?: number ;
    currency?: Currency;
    expenses?: ExpInc ;
    incomes?: ExpInc ;
    constructor(title?: string, balance?: number, currency?: Currency, expenses?: ExpInc, incomes?: ExpInc){
        this.title = title
        this.balance = balance
        this.currency = currency
        this.expenses = expenses
        this.incomes = incomes
    }
}


