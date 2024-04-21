import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';

@Injectable()
export class ExpensesService {

    constructor(@InjectRepository(Expense) private expenseRepository: Repository<Expense>){ }

    async getExpenses(): Promise<Expense[]>{
        return this.expenseRepository.find({relations: ["budget"]})
    }

    async findExpense(id:string): Promise<Expense>{
        return this.expenseRepository.findOne({where: {id: id}, relations: ["budget"]})
    }

    async createExpense(expense: ExpenseCreateDTO): Promise<Expense>{
        
        const newExpense = this.expenseRepository.create(expense)
        return this.expenseRepository.save(newExpense)
    }

    async updateExpense(update: ExpenseUpdateDTO, id: string):Promise<Expense>{
        const expense = await this.findExpense(id)
        const updatedExp = this.expenseRepository.merge(expense, update)
        return this.expenseRepository.save(updatedExp)
    }
}
