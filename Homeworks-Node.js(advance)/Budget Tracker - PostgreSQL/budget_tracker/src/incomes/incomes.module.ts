import { Module } from '@nestjs/common';
import { IncomesService } from './incomes.service';
import { IncomesController } from './incomes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Income } from './income.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Income])],
  providers: [IncomesService],
  controllers: [IncomesController]
})
export class IncomesModule {}
