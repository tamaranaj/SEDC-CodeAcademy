import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/auth/dtos/signUp.dto';
import { AdminORMEntity } from './adimn.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UsersORMEntity) private usersRepository: Repository<UsersORMEntity>,
    @InjectRepository(AdminORMEntity) private adminRepository: Repository<AdminORMEntity>){}

    async findUserByEmail(email:string){
        const user = await this.usersRepository.findOne({where: {email: email}, relations: ["budget"]})
        return user
    }

    async findUserByID(id: number){
        const user = await this.usersRepository.findOne({where: {id: id}, relations:['budget']})

        return user
    }

    async findAdminByEmail(email: string){
        const admin = await this.adminRepository.findOne({where: {email: email}})
        return admin
    }

    async createUser(newUser: SignUpDTO){
        if(newUser.role === 'Admin'){
            const admin = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            }
            const newAdmin = this.adminRepository.create(admin)
            await this.adminRepository.save(newAdmin)
            return {message: `User ${newAdmin.firstName} is success registered with id: ${newAdmin.id}`}
        }
        if(newUser.role === 'User'){
            const user = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            }
            const addUser = this.usersRepository.create(user)
            await this.usersRepository.save(addUser)

            return {message: `User ${addUser.firstName} is success registered with id: ${addUser.id}`}
        }
        
    }

    async getAllUsers(){
        return this.usersRepository.find({relations: ["budget"]})
    }

    async deleteBudget(userID: number){
        const user = await this.findUserByID(userID)
        user.budget = null
        await this.usersRepository.save(user)
    }


    async getAllAdmins(){
        return this.adminRepository.find()
    }



}
