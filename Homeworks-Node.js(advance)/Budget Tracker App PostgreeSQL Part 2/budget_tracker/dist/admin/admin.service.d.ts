import { LogORMEntity } from 'src/auth/log.entity';
import { Budget } from 'src/budget/budget.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class AdminService {
    private userService;
    private budgetRepo;
    private logRepo;
    constructor(userService: UsersService, budgetRepo: Repository<Budget>, logRepo: Repository<LogORMEntity>);
    getUsers(): Promise<import("../users/users.entity").UsersORMEntity[]>;
    getAdmins(): Promise<import("../users/adimn.entity").AdminORMEntity[]>;
    getBudgets(): Promise<Budget[]>;
    getLogs(): Promise<LogORMEntity[]>;
}
