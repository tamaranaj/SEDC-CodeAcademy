import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/auth/dtos/signUp.dto';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(UsersORMEntity) private usersRepository: Repository<UsersORMEntity>){}

    async findUserByEmail(email:string){
        const user = await this.usersRepository.findOne({where: {email: email}, relations: ["budget"]})

        return user
    }

    async findUserByID(id: number){
        const user = await this.usersRepository.findOne({where: {id: id}, relations:['budget']})

        return user
    }

    async createUser(newUser: SignUpDTO){
        const user = this.usersRepository.create(newUser)
        await this.usersRepository.save(user)

        return {message: `User ${user.firstName} is success registered with id: ${user.id}`}
    }

    async getAllUsers(){
        return this.usersRepository.find({relations: ["budget"]})
    }

    async deleteBudget(userID: number){
        const user = await this.findUserByID(userID)
        user.budget = null
        await this.usersRepository.save(user)
    }


}
