import { Currency } from "src/enums/currency.enum";
import { Expense } from "src/expenses/expense.entity";
import { Income } from "src/incomes/income.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Budget{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        type: "varchar"
    })
    firstName: string

    @Column({
        type: "varchar"
    })
    lastName: string

    @Column()
    balance : number

    @Column({
        enum: Currency,
        enumName: "currency"
    })
    currency: Currency

    @OneToMany(()=>Expense, (expense)=> expense.budget)
    expenses : Expense []

    @OneToMany(()=>Income, (income)=> income.budget)
    incomes : Income []
}