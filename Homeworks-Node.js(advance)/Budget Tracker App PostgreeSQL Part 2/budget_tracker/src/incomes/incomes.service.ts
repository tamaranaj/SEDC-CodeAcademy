import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { Budget } from 'src/budget/budget.entity';

@Injectable()
export class IncomesService {

    constructor(@InjectRepository(Income) private incomeRepository: Repository<Income>, @InjectRepository(Budget) private budgetRepository: Repository<Budget>){ }

    async getIncomes(id: number){
        const incomes = await this.incomeRepository.find({where:{ budget: { user: {id: id}}},relations: ["budget"]})
        if(incomes.length === 0){
            throw new NotFoundException('Incomes not created.')
        }
        return incomes
    }

    async findIncome(userId:number,incomeId:string){

        const incomes =  await this.getIncomes(userId)
        const income = await this.incomeRepository.findOne({where: {id : incomeId}})
        console.log(income)
        const userIncome = incomes.filter(item=>item === income)
        if(!userIncome){
            throw new HttpException(`Income with id: ${incomeId} not found`, 404)
        }      
        return income
    }

    async createIncome(userId: number, income: IncomeCreateDTO){    
        const budget = await this.findBudget(userId)
        if(budget.currency !== income.currency){
            throw new HttpException(`Must convert income in ${budget.currency} currency`, 406)
        }
        const newIncome = this.incomeRepository.create({...income, budgetID: budget.id})   
        budget.balance = budget.balance + income.amount     
        this.budgetRepository.save(budget)
        return this.incomeRepository.save(newIncome)
        
    }

    async updateIncome(incomeId: string, userId: number, update: IncomeUpdateDTO){
        const income = await this.findIncome(userId, incomeId)
        const budget = await this.findBudget(userId)
              
        if(income.amount>update.amount){
            const result = income.amount - update.amount
            budget.balance = budget.balance - result
            await this.budgetRepository.save(budget)
        }
        if(income.amount<update.amount){
            const result = update.amount - income.amount
            budget.balance = budget.balance + result
            await this.budgetRepository.save(budget)
        }
        
        const updateInc =  this.incomeRepository.merge(income, update)
        await this.incomeRepository.save(updateInc)
        return {message: `Update success.`}
    }

    async findBudget(userId: number){
        const budget = await this.budgetRepository.findOne({where: {user : {id: userId}}, relations: ["expenses", "incomes"]})
        if(!budget){
            throw new HttpException(`Budget with id: ${userId} not found.`, 404)
        }

        return budget
    }

    
}


