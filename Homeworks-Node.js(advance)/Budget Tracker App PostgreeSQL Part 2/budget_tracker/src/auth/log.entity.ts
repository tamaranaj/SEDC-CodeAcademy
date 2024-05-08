import { UsersORMEntity } from "src/users/users.entity";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: "LoginDetails"})
export class LogORMEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    userEmail: string

    @CreateDateColumn()
    loggedIn: Date
}