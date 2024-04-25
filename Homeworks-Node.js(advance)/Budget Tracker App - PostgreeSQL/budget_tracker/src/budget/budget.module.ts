import { Module } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { BudgetController } from './budget.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from './budget.entity';
import { Expense } from 'src/expenses/expense.entity';
import { Income } from 'src/incomes/income.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Budget, Expense, Income])],
  providers: [BudgetService],
  controllers: [BudgetController]
})
export class BudgetModule {}
