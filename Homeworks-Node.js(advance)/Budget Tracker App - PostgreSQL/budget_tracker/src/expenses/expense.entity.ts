import { Budget } from "src/budget/budget.entity";
import { Currency } from "src/enums/currency.enum";
import { Column, CreateDateColumn,  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class Expense{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    amount: number

    @Column({
        enum: Currency,
        enumName: "currency"
    })
    currency: Currency

    @Column({
        type: "varchar"
    })
    description: string

    @CreateDateColumn()
    createdAt: Date

    @ManyToOne(()=>Budget, (budget)=>budget.expenses)
    @JoinColumn({name: "budgetID"})
    budget: Budget

    @Column({
        nullable: false,
        type: "uuid"
    })
    budgetID: string
}