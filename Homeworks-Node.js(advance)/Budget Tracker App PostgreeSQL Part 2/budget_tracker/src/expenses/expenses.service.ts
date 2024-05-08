import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
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

    async getExpenses(userId: number){
        const expenses = await this.expenseRepository.find({where: {budget: {user: {id: userId}}}, relations: ["budget"]})

        if(expenses.length === 0){
            throw new NotFoundException('Expenses are not created')
        }

        return expenses
    }

    async findExpense(user: number, expenseId:string){
        const expenses = await this.getExpenses(user)
        const expense = await this.expenseRepository.findOne({where: {id: expenseId}})
        const userExpense = expenses.filter(item=>item === expense)
        if(!userExpense){

            throw new HttpException(`Expense with id: ${expenseId} not found`, 404)
        }
        return expense
    }

    async createExpense(user: number,expense: ExpenseCreateDTO){

        const budget = await this.findBudget(user)
        if(budget.currency !== expense.currency){
            throw new HttpException(`Must convert expense in ${budget.currency} currency`, 406)
        }
        if(budget.balance<expense.amount){
            throw new HttpException(`Insufficient funds.Your balance is ${budget.balance} ${budget.currency}.`, 406)
        }
        budget.balance = budget.balance - expense.amount
        await this.budgetRepository.save(budget)
        const newExpense = this.expenseRepository.create({...expense, budgetID: budget.id})
        return await this.expenseRepository.save(newExpense)

    }

    async updateExpense(user: number, id: string, update: ExpenseUpdateDTO, ){
        const expense = await this.findExpense(user, id)
        const budget = await this.findBudget(user)

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

    async findBudget(id: number){
        const budget = await this.budgetRepository.findOne({where: {user: {id: id}}, relations: ["expenses", "incomes"]})
        if(!budget){
            throw new HttpException(`Budget with id: ${id} not found.`, 404)
        }

        return budget
    }
}
