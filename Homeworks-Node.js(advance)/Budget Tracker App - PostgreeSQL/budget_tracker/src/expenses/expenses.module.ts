import { Module } from '@nestjs/common';
import { ExpensesService } from './expenses.service';
import { ExpensesController } from './expenses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Expense } from './expense.entity';
import { Budget } from 'src/budget/budget.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Expense, Budget])],
  providers: [ExpensesService],
  controllers: [ExpensesController]
})
export class ExpensesModule {}
