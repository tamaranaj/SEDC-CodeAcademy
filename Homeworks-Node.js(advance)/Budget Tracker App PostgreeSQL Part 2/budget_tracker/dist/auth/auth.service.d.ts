import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignUpDTO } from './dtos/signUp.dto';
import { SignInDTO } from './dtos/signIn.dto';
import { LogORMEntity } from './log.entity';
import { Repository } from 'typeorm';
export declare class AuthService {
    private usersService;
    private jwtService;
    private logService;
    constructor(usersService: UsersService, jwtService: JwtService, logService: Repository<LogORMEntity>);
    registerUser(user: SignUpDTO): Promise<{
        message: string;
    }>;
    login(user: SignInDTO): Promise<string>;
    logger(email: string): Promise<void>;
}
