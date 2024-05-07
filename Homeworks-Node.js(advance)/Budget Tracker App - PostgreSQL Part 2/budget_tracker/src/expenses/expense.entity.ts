import { Budget } from "src/budget/budget.entity";
import { Currency } from "src/enums/currency.enum";
import { Column, CreateDateColumn,  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

    @UpdateDateColumn()
    updatedAt: Date

    @ManyToOne(()=>Budget, (budget)=>budget.expenses)
    @JoinColumn({name: "budgetID"})
    budget: Budget

    @Column({
        nullable: false,
        type: "uuid"
    })
    budgetID: string
}