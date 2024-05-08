import { AdminService } from './admin.service';
export declare class AdminController {
    private readonly adminService;
    constructor(adminService: AdminService);
    getAllUsers(): Promise<import("../users/users.entity").UsersORMEntity[]>;
    getAllAdmins(): Promise<import("../users/adimn.entity").AdminORMEntity[]>;
    getBudgets(): Promise<import("../budget/budget.entity").Budget[]>;
    getLogs(): Promise<import("../auth/log.entity").LogORMEntity[]>;
}
