import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Income } from './income.entity';
import { Repository } from 'typeorm';
import { IncomeCreateDTO } from './dtos/income.create.dto';
import { IncomeUpdateDTO } from './dtos/income.update.dto';
import { Budget } from 'src/budget/budget.entity';

@Injectable()
export class IncomesService {

    constructor(@InjectRepository(Income) private incomeRepository: Repository<Income>, @InjectRepository(Budget) private budgetRepository: Repository<Budget>){ }

    async getIncomes(){
        return this.incomeRepository.find({relations: ["budget"]})

    }

    async findIncome(id:string){
        const income =  await this.incomeRepository.findOne({where: {id : id}, relations: ["budget"]})
        if(!income){
            throw new HttpException(`Income with id: ${id} not found`, 404)
        }
        return income
    }

    async createIncome(income: IncomeCreateDTO){    
        const budget = await this.findBudget(income.budgetID)
        if(budget.currency !== income.currency){
            throw new HttpException(`Must convert income in ${budget.currency} currency`, 406)
        }
        const newIncome = this.incomeRepository.create(income)   
        budget.balance = budget.balance + income.amount     
        this.budgetRepository.save(budget)
        return this.incomeRepository.save(newIncome)
        
    }

    async updateIncome(id: string, update: IncomeUpdateDTO){
        const income = await this.findIncome(id)
        const budget = await this.findBudget(income.budgetID)
               
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

    async findBudget(id: string){
        const budget = await this.budgetRepository.findOne({where: {id: id}, relations: ["expenses", "incomes"]})
        if(!budget){
            throw new HttpException(`Budget with id: ${id} not found.`, 404)
        }

        return budget
    }

    
}


