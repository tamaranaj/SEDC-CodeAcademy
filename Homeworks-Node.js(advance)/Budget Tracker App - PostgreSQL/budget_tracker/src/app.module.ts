import { Module } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { DatabaseModule } from './database/database.module';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';

@Module({
  imports: [BudgetModule, DatabaseModule, ExpensesModule, IncomesModule],

})
export class AppModule {}
