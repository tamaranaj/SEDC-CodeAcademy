import { Injectable, NotFoundException } from '@nestjs/common';
import { Budget, BudgetUpdate } from './entities/budget.entity';
import { BudgetCreation } from './entities/budget.entity';

@Injectable()
export class BudgetService {

    private budgets: Budget [] = []

    readBudgets(){
        return this.budgets
    }

    createBudget(budgetCreation: BudgetCreation){
        const budget= new Budget (budgetCreation.title,budgetCreation.balance,budgetCreation.currency,budgetCreation.expenses,budgetCreation.incomes)
        this.budgets.push(budget)
        return budget.id
    }

    findByID(id: string){
        const budget = this.budgets.find((item)=> item.id === id)

        if(!budget){
            throw new NotFoundException(`Budget with id: ${id} not found!`)
        }

        return budget
    }

    deleteByID(id:string){
        const budget = this.findByID(id)

        this.budgets = this.budgets.filter((item)=>item.id !== id)
    }

    updateByID(id: string, budgetUpdate: BudgetUpdate){
        const budget = this.findByID(id)
        console.log(budget)
        budget.title = !budgetUpdate.title ? budget.title : budgetUpdate.title 
        budget.balance = !budgetUpdate.balance ? budget.balance: budgetUpdate.balance
        budget.currency = !budgetUpdate.currency ? budget.currency: budgetUpdate.currency
        budget.expenses[0].amount = !budgetUpdate.expenses.amount ? budget.expenses[0].amount : budgetUpdate.expenses.amount
        budget.expenses[0].description = !budgetUpdate.expenses.description ? budget.expenses[0].description : budgetUpdate.expenses.description
        budget.incomes[0].amount = !budgetUpdate.incomes.amount ? budget.incomes[0].amount : budgetUpdate.incomes.amount
        budget.incomes[0].description = !budgetUpdate.incomes.description ? budget.incomes[0].description : budgetUpdate.incomes.description
        budget.updatedAt = new Date().getTime()
        return budget
    }
}
