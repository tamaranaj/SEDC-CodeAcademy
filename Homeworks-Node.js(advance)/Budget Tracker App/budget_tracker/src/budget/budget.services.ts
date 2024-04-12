import { Injectable } from '@nestjs/common';
import { Budget } from 'src/interfaces/budget.interface';
import { Currency } from 'src/enums/currency.enum';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class BudgetService {
  private budgets: Budget[] = [
    {
      id: uuidv4(),
      title: 'kfjkgjg',
      balance: 500,
      currency: Currency.USD,
      expenses: [{ id: uuidv4(), amount: 100, description: 'cigarettes' }],
      incomes: [{ id: uuidv4(), amount: 1000, description: 'salary' }],
    },
    {
      id: uuidv4(),
      title: 'kfjkgjg',
      balance: 100,
      currency: Currency.EUR,
      expenses: [{ id: uuidv4(), amount: 50, description: 'food' }],
      incomes: [{ id: uuidv4(), amount: 850, description: 'salary' }],
    },
  ];

  readBudgets() {
    return this.budgets;
  }
}
