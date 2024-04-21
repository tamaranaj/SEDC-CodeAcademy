import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';

@Injectable()
export class BudgetService {

    constructor(@InjectRepository(Budget) private budgetRepository: Repository<Budget>){ }

    async getBudgets():Promise<Budget[]>{
        return this.budgetRepository.find({relations: ["expenses", "incomes"]})
    }

    async findBudget(id: string): Promise<Budget>{
        return  this.budgetRepository.findOne({where: {id: id}, relations: ["expenses","incomes"]})
    }

    async createBudget(budget: BudgetCreateDTO): Promise<Budget>{
        const newBudget = this.budgetRepository.create(budget)
        return this.budgetRepository.save(newBudget)
    }

    async updateBudget(id:string,update: BudgetUpdateDTO): Promise<Budget>{
        const budget = await this.findBudget(id)
        const updateBudget = this.budgetRepository.merge(budget, update)
        return this.budgetRepository.save(updateBudget)
    }

    async deleteBudget(id:string): Promise<string | Budget>{
        const budget = await this.findBudget(id)
        await this.budgetRepository.delete(id)
        return budget
    }
}
