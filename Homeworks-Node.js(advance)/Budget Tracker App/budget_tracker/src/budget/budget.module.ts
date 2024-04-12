import { Module } from "@nestjs/common";
import { BudgetController } from "./budget.controller";
import { BudgetService } from "./budget.services";
@Module({
    controllers: [BudgetController],
    providers: [BudgetService]
})
export class BudgetModule{
    
}
