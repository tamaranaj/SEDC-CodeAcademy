import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Repository } from 'typeorm';
import { ExpenseCreateDTO } from './dtos/expense.create.dto';
import { ExpenseUpdateDTO } from './dtos/update.create.dto';
import { Budget } from 'src/budget/budget.entity';

@Injectable()
export class ExpensesService {

    constructor(@InjectRepository(Expense) private expenseRepository: Repository<Expense>,
    @InjectRepository(Budget) private budgetRepository: Repository<Budget>){ }

    async getExpenses(): Promise<Expense[]>{
        return this.expenseRepository.find({relations: ["budget"]})
    }

    async findExpense(id:string){
        const expense = this.expenseRepository.findOne({where: {id: id}, relations: ["budget"]})
        if(!expense){
            throw new HttpException(`Expense with id: ${id} not found`, 404)
        }
        return expense
    }

    async createExpense(expense: ExpenseCreateDTO){
        const budget = await this.findBudget(expense.budgetID)
        if(budget.currency !== expense.currency){
            throw new HttpException(`Must convert expense in ${budget.currency} currency`, 406)
        }
        if(budget.balance<expense.amount){
            throw new HttpException(`Insufficient funds.Your balance is ${budget.balance} ${budget.currency}.`, 406)
        }
        budget.balance = budget.balance - expense.amount
        this.budgetRepository.save(budget)
        const newExpense = this.expenseRepository.create(expense)
        return this.expenseRepository.save(newExpense)

    }

    async updateExpense(update: ExpenseUpdateDTO, id: string){
        const expense = await this.findExpense(id)
        const budget = await this.findBudget(expense.budgetID)

        if(expense.amount > update.amount){
            const result = expense.amount - update.amount
            budget.balance = budget.balance + result
            await this.budgetRepository.save(budget)
        }
        if(budget.balance<update.amount){
            throw new HttpException(`Insufficient funds.Your balance is ${budget.balance} ${budget.currency}.`, 406)
        }
        if(expense.amount<update.amount){
            const result = update.amount - expense.amount
            budget.balance = budget.balance - result
            await this.budgetRepository.save(budget)
        }

        const updatedExp = this.expenseRepository.merge(expense, update)
        this.expenseRepository.save(updatedExp)
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
