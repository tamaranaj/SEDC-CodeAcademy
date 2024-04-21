import { Budget } from "src/budget/budget.entity";
import { Column, CreateDateColumn,  Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Expense{
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    amount: number

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