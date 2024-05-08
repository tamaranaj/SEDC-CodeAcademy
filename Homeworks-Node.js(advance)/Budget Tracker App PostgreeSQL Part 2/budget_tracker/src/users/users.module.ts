import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersORMEntity } from './users.entity';
import { AdminORMEntity } from './adimn.entity';


@Module({
  imports:[TypeOrmModule.forFeature([UsersORMEntity, AdminORMEntity])],
  providers: [UsersService],
  exports:[UsersService],
    
})
export class UsersModule {}
