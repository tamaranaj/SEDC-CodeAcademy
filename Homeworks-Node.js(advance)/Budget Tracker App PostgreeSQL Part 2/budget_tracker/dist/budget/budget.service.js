"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("./budget.entity");
const typeorm_2 = require("typeorm");
const expense_entity_1 = require("../expenses/expense.entity");
const income_entity_1 = require("../incomes/income.entity");
const users_service_1 = require("../users/users.service");
const budget_props_1 = require("./budget.props");
let BudgetService = class BudgetService {
    constructor(budgetRepository, expenseRepo, incomeRepo, usersService) {
        this.budgetRepository = budgetRepository;
        this.expenseRepo = expenseRepo;
        this.incomeRepo = incomeRepo;
        this.usersService = usersService;
    }
    async getBudget(userID) {
        const budget = await this.budgetRepository.findOne({ where: { user: { id: userID } }, relations: ["expenses", "incomes", "user"] });
        console.log("first", budget);
        if (!budget) {
            throw new common_1.NotFoundException('Must create a budget first.');
        }
        return budget;
    }
    async findBudget(id) {
        const budget = await this.budgetRepository.findOne({ where: { id: id }, relations: ["expenses", "incomes", "user"] });
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found`, 404);
        }
        return budget;
    }
    async createBudget(budget, user) {
        const foundUser = await this.usersService.findUserByID(user);
        if (foundUser.budget) {
            return { message: `User ${foundUser.firstName} ${foundUser.lastName} already has budget.` };
        }
        const budgetCreation = new budget_props_1.BudgetProps(budget.currency, foundUser, budget.balance);
        const newBudget = this.budgetRepository.create(budgetCreation);
        return await this.budgetRepository.save(newBudget);
    }
    async updateBudget(update, userID) {
        const budget = await this.getBudget(userID);
        const updateBudget = this.budgetRepository.merge(budget, update);
        return await this.budgetRepository.save(updateBudget);
    }
    async deleteBudget(userID) {
        const budget = await this.getBudget(userID);
        await this.expenseRepo.delete({ budgetID: budget.id });
        await this.incomeRepo.delete({ budgetID: budget.id });
        await this.usersService.deleteBudget(userID);
        await this.budgetRepository.delete(budget.id);
        return { message: `Budget with id ${budget} is successfully deleted.`, deletedBudget: budget };
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __param(1, (0, typeorm_1.InjectRepository)(expense_entity_1.Expense)),
    __param(2, (0, typeorm_1.InjectRepository)(income_entity_1.Income)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        users_service_1.UsersService])
], BudgetService);
//# sourceMappingURL=budget.service.js.map