import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogORMEntity } from './log.entity';

@Module({
  imports:[TypeOrmModule.forFeature([LogORMEntity]),
    UsersModule,
    JwtModule.registerAsync({
      inject: [ConfigService],
      global: true,
      useFactory(env: ConfigService){
        return{
          secret: env.get('JWT_SECRET'),
          signOptions: {expiresIn: '15min'}
        }
      }
    })
  ],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule{ }
