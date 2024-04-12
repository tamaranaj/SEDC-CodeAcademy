import { Controller, Get } from "@nestjs/common";
import { BudgetService } from "./budget.services";
@Controller("budgets")
export class BudgetController{
    constructor(private readonly budgetService: BudgetService){}

    @Get()
    listBudgets(){
        return this.budgetService.readBudgets()
    }
}