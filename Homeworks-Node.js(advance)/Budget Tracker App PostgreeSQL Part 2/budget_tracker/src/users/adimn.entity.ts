import { Column, CreateDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";


@Entity({name: 'Admins'})
export class AdminORMEntity{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    email: string

    @Column({
        type: 'varchar'
    })
    password: string

    @Column({
        default: "Admin"
    })
    role: string

    @CreateDateColumn()
    createdAt: Date

}