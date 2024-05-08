import { Currency } from "src/enums/currency.enum"
import { UsersORMEntity } from "src/users/users.entity"



export class BudgetProps{

    balance?: number
    currency: Currency
    user: UsersORMEntity

    constructor(currency: Currency, user: UsersORMEntity,balance?:number){
        this.balance = balance
        this.currency = currency
        this.user = user
    }
    
}