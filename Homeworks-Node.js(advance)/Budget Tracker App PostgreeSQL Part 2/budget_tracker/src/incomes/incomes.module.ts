import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './income.entity';
import { Budget } from 'src/budget/budget.entity';
import { LogORMEntity } from 'src/auth/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Income, Budget])],
  providers: [IncomesService],
  controllers: [IncomesController]
})
export class IncomesModule {}
