import { UsersORMEntity } from './users.entity';
import { Repository } from 'typeorm';
import { SignUpDTO } from 'src/auth/dtos/signUp.dto';
import { AdminORMEntity } from './adimn.entity';
export declare class UsersService {
    private usersRepository;
    private adminRepository;
    constructor(usersRepository: Repository<UsersORMEntity>, adminRepository: Repository<AdminORMEntity>);
    findUserByEmail(email: string): Promise<UsersORMEntity>;
    findUserByID(id: number): Promise<UsersORMEntity>;
    findAdminByEmail(email: string): Promise<AdminORMEntity>;
    createUser(newUser: SignUpDTO): Promise<{
        message: string;
    }>;
    getAllUsers(): Promise<UsersORMEntity[]>;
    deleteBudget(userID: number): Promise<void>;
    getAllAdmins(): Promise<AdminORMEntity[]>;
}
