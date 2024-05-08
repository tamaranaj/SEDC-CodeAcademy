import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { BudgetModule } from './budget/budget.module';
import { DatabaseModule } from './database/database.module';
import { ExpensesModule } from './expenses/expenses.module';
import { IncomesModule } from './incomes/incomes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GeneralMiddleware } from './middleware/general.middleware';
import { AdminModule } from './admin/admin.module';


@Module({
  imports: [BudgetModule, DatabaseModule, ExpensesModule, IncomesModule, AuthModule, UsersModule, AdminModule],

})
export class AppModule implements NestModule{

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(GeneralMiddleware).forRoutes('*')
  }
}
