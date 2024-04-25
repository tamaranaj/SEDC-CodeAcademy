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
exports.IncomesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const income_entity_1 = require("./income.entity");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("../budget/budget.entity");
let IncomesService = class IncomesService {
    constructor(incomeRepository, budgetRepository) {
        this.incomeRepository = incomeRepository;
        this.budgetRepository = budgetRepository;
    }
    async getIncomes() {
        return this.incomeRepository.find({ relations: ["budget"] });
    }
    async findIncome(id) {
        const income = await this.incomeRepository.findOne({ where: { id: id }, relations: ["budget"] });
        if (!income) {
            throw new common_1.HttpException(`Income with id: ${id} not found`, 404);
        }
        return income;
    }
    async createIncome(income) {
        const budget = await this.findBudget(income.budgetID);
        if (budget.currency !== income.currency) {
            throw new common_1.HttpException(`Must convert income in ${budget.currency} currency`, 406);
        }
        const newIncome = this.incomeRepository.create(income);
        budget.balance = budget.balance + income.amount;
        this.budgetRepository.save(budget);
        return this.incomeRepository.save(newIncome);
    }
    async updateIncome(id, update) {
        const income = await this.findIncome(id);
        const budget = await this.findBudget(income.budgetID);
        if (budget.currency !== update.currency) {
            throw new common_1.HttpException(`Must convert income in ${budget.currency} currency`, 406);
        }
        if (income.amount > update.amount) {
            const result = income.amount - update.amount;
            budget.balance = budget.balance - result;
            await this.budgetRepository.save(budget);
        }
        if (income.amount < update.amount) {
            const result = update.amount - income.amount;
            budget.balance = budget.balance + result;
            await this.budgetRepository.save(budget);
        }
        const updateInc = this.incomeRepository.merge(income, update);
        await this.incomeRepository.save(updateInc);
        return { message: `Update success.` };
    }
    async findBudget(id) {
        const budget = await this.budgetRepository.findOne({ where: { id: id }, relations: ["expenses", "incomes"] });
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found.`, 404);
        }
        return budget;
    }
};
exports.IncomesService = IncomesService;
exports.IncomesService = IncomesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(income_entity_1.Income)),
    __param(1, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], IncomesService);
//# sourceMappingURL=incomes.service.js.map