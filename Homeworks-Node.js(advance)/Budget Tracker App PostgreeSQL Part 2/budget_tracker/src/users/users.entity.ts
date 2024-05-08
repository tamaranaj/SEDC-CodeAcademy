import { Budget } from "src/budget/budget.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class UsersORMEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    email: string

    @Column({
        type: 'varchar'
    })
    password: string

    @Column()
    firstName: string

    @Column()
    lastName: string

    @CreateDateColumn()
    createdAt: Date

    @OneToOne(()=>Budget, (budget)=> budget.user)
    @JoinColumn()
    budget: Budget

    
    
}