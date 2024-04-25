import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { Repository } from 'typeorm';
import { BudgetCreateDTO } from './dtos/create.dto';
import { BudgetUpdateDTO } from './dtos/update.dto';
import { Expense } from 'src/expenses/expense.entity';
import { Income } from 'src/incomes/income.entity';

@Injectable()
export class BudgetService {

    constructor(@InjectRepository(Budget) private budgetRepository: Repository<Budget>, 
    @InjectRepository(Expense) private expenseRepo: Repository<Expense>, 
    @InjectRepository(Income) private incomeRepo: Repository<Income>){ }

    async getBudgets():Promise<Budget[]>{
        return this.budgetRepository.find({relations: ["expenses", "incomes"]})
    }

    async findBudget(id: string){
        const budget = await this.budgetRepository.findOne({where: {id: id}, relations: ["expenses","incomes"]})
        if(!budget) {
            throw new HttpException(`Budget with id: ${id} not found`, 404)
        }
        return budget
        
    }

    async createBudget(budget: BudgetCreateDTO): Promise<Budget>{
        const newBudget = this.budgetRepository.create(budget)
        return this.budgetRepository.save(newBudget)
    }

    async updateBudget(id:string,update: BudgetUpdateDTO){
        const budget = await this.findBudget(id)
        if(!budget){
           throw new HttpException(`Budget with id: ${id} not found`, 404)
        }
        const updateBudget = this.budgetRepository.merge(budget, update)
        return this.budgetRepository.save(updateBudget)
    }

    async deleteBudget(id:string){
        const budget = await this.findBudget(id)        
        await this.expenseRepo.delete({budgetID: id})
        await this.incomeRepo.delete({budgetID: id})
        await this.budgetRepository.delete(id)   
        return {message: `Budget with id ${id} is successfully deleted.`,deletedBudget: budget}
    }
}
