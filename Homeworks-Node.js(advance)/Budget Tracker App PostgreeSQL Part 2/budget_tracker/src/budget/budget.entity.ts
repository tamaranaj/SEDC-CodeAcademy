import { Currency } from "src/enums/currency.enum";
import { Expense } from "src/expenses/expense.entity";
import { Income } from "src/incomes/income.entity";
import { UsersORMEntity } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity()
export class Budget{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({
        default :0
    })
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

    @OneToOne(()=>UsersORMEntity, (user)=> user.budget)
    user: UsersORMEntity

    @CreateDateColumn()
    createdAt: Date

    @UpdateDateColumn()
    updatedAt: Date

}