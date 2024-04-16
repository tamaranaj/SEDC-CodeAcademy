import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetDTO } from './DTO/budgetCreate.DTO';
import { BudgetCreation, BudgetUpdate } from './entities/budget.entity';
import { ExpenseEntity, IncomeEntity } from './entities/interfaces/budget.interfaces';
import { BudgetUpdateDTO } from './DTO/budgetUpdate.DTO';


@Controller('budget')
export class BudgetController {
    constructor(private readonly budgetService: BudgetService){}

    @Get()
    listBudgets(){
        return this.budgetService.readBudgets()
    }

    @Post()
    addBudget(@Body() reqBody: BudgetDTO){
        const{title, balance, currency, expenses, incomes} = reqBody
        const newexp = new ExpenseEntity( expenses.amount, expenses.description)
        const newinc = new IncomeEntity(incomes.amount,incomes.description)
        const budgetCreation = new BudgetCreation(title, balance, currency)
        budgetCreation.addExInc(newexp, newinc)

        const id = this.budgetService.createBudget(budgetCreation)

        return {message: "Budget crated", budgetID: id}
        
    }

    @Get(':id')
    findBudget(@Param("id") id: string){

        const budget = this.budgetService.findByID(id)

        return budget
    }

    @Delete(':id')
    removeBudget(@Param("id") id:string){

        this.budgetService.deleteByID(id)

        return {message: `Budget with id: ${id} is deleted.`}
    }

    @Put(':id')
    updateBudget(@Param("id") id:string, @Body() budgetUpdate: BudgetUpdateDTO){
        const {title, balance, currency, expenses, incomes} = budgetUpdate
        const budgetToUPD = new BudgetUpdate(title, balance, currency, expenses, incomes)
               
        const budget = this.budgetService.updateByID(id, budgetToUPD)

        return {updatedBudget: budget}
    }


    
}
