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
let BudgetService = class BudgetService {
    constructor(budgetRepository, expenseRepo, incomeRepo) {
        this.budgetRepository = budgetRepository;
        this.expenseRepo = expenseRepo;
        this.incomeRepo = incomeRepo;
    }
    async getBudgets() {
        return this.budgetRepository.find({ relations: ["expenses", "incomes"] });
    }
    async findBudget(id) {
        const budget = await this.budgetRepository.findOne({ where: { id: id }, relations: ["expenses", "incomes"] });
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found`, 404);
        }
        return budget;
    }
    async createBudget(budget) {
        const newBudget = this.budgetRepository.create(budget);
        return this.budgetRepository.save(newBudget);
    }
    async updateBudget(id, update) {
        const budget = await this.findBudget(id);
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found`, 404);
        }
        const updateBudget = this.budgetRepository.merge(budget, update);
        return this.budgetRepository.save(updateBudget);
    }
    async deleteBudget(id) {
        const budget = await this.findBudget(id);
        if (!budget) {
            throw new common_1.NotFoundException({ message: `Budget with id: ${id} was not found` });
        }
        await this.expenseRepo.delete({ budgetID: id });
        await this.incomeRepo.delete({ budgetID: id });
        await this.budgetRepository.delete(id);
        return { message: `Budget with id ${id} is successfully deleted.`, deletedBudget: budget };
    }
    async addIncome(incomeBalance, id) {
        const budget = await this.findBudget(id);
        if (!budget) {
            return false;
        }
        budget.balance += incomeBalance;
        this.budgetRepository.save(budget);
        return budget.balance;
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
        typeorm_2.Repository])
], BudgetService);
//# sourceMappingURL=budget.service.js.map