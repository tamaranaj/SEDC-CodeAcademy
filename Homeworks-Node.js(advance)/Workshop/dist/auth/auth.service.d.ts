import { UsersORMEntity } from './user.entity';
import { Repository } from 'typeorm';
import { RegisterDTO } from './dtos/register.dto';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userRepo;
    private jwtService;
    constructor(userRepo: Repository<UsersORMEntity>, jwtService: JwtService);
    register(user: RegisterDTO): Promise<{
        message: string;
        id: number;
    }>;
    login(user: RegisterDTO): Promise<{
        message: string;
        accessToken: string;
    }>;
}
