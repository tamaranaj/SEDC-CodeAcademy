import { Module } from '@nestjs/common';
import { AdminController } from './admin.controller';
import { AdminService } from './admin.service';
import { UsersModule } from 'src/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Budget } from 'src/budget/budget.entity';
import { LogORMEntity } from 'src/auth/log.entity';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';

@Module({
  imports: [UsersModule, TypeOrmModule.forFeature([Budget, LogORMEntity]), JwtModule.registerAsync({
    inject: [ConfigService],
    global: false,
    useFactory(env: ConfigService){
      return{
        secret: env.get('JWT_SECRET_ADMIN'),
        signOptions: {expiresIn: '30min'}
      }
    }
  })],
  controllers: [AdminController],
  providers: [AdminService]
})
export class AdminModule {}
