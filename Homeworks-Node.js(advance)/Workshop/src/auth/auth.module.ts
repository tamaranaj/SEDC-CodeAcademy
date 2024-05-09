import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersORMEntity } from './user.entity';

@Module({
  imports: [JwtModule.registerAsync({
    inject: [ConfigService],
      global: true,
      useFactory(env: ConfigService){
        return{
          secret: env.get('JWT_SECRET'),
          signOptions: {expiresIn: '30min'}
        }
      }
  }), TypeOrmModule.forFeature([UsersORMEntity])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
