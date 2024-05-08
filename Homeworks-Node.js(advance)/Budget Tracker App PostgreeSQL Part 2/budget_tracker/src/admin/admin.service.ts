import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LogORMEntity } from 'src/auth/log.entity';
import { Budget } from 'src/budget/budget.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class AdminService {
    constructor(private userService: UsersService, 
        @InjectRepository(Budget) private budgetRepo: Repository<Budget>,
        @InjectRepository(LogORMEntity) private logRepo: Repository<LogORMEntity>){ }

    async getUsers(){
        return await this.userService.getAllUsers()
    }


    async getAdmins(){
        return await this.userService.getAllAdmins()
    }


    async getBudgets(){
        return await this.budgetRepo.find({relations: ["expenses", "incomes", "user"]})
    }

    async getLogs(){
        
        const log = await this.logRepo.find()

        return log
    }
}


