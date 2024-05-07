import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/auth/dtos/signUp.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<UsersORMEntity>);
    findUserByEmail(email: string): Promise<UsersORMEntity>;
    findUserByID(id: number): Promise<UsersORMEntity>;
    createUser(newUser: SignUpDTO): Promise<{
        message: string;
    }>;
    getAllUsers(): Promise<UsersORMEntity[]>;
    deleteBudget(userID: number): Promise<void>;
}
