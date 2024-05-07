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
exports.ExpensesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const expense_entity_1 = require("./expense.entity");
const typeorm_2 = require("typeorm");
const budget_entity_1 = require("../budget/budget.entity");
let ExpensesService = class ExpensesService {
    constructor(expenseRepository, budgetRepository) {
        this.expenseRepository = expenseRepository;
        this.budgetRepository = budgetRepository;
    }
    async getExpenses(userId) {
        const expenses = await this.expenseRepository.find({ where: { budget: { user: { id: userId } } }, relations: ["budget"] });
        if (expenses.length === 0) {
            throw new common_1.NotFoundException('Expenses are not created');
        }
        return expenses;
    }
    async findExpense(user, expenseId) {
        const expenses = await this.getExpenses(user);
        const expense = await this.expenseRepository.findOne({ where: { id: expenseId } });
        const userExpense = expenses.filter(item => item === expense);
        if (!userExpense) {
            throw new common_1.HttpException(`Expense with id: ${expenseId} not found`, 404);
        }
        return expense;
    }
    async createExpense(user, expense) {
        const budget = await this.findBudget(user);
        if (budget.currency !== expense.currency) {
            throw new common_1.HttpException(`Must convert expense in ${budget.currency} currency`, 406);
        }
        if (budget.balance < expense.amount) {
            throw new common_1.HttpException(`Insufficient funds.Your balance is ${budget.balance} ${budget.currency}.`, 406);
        }
        budget.balance = budget.balance - expense.amount;
        await this.budgetRepository.save(budget);
        const newExpense = this.expenseRepository.create({ ...expense, budgetID: budget.id });
        return await this.expenseRepository.save(newExpense);
    }
    async updateExpense(user, id, update) {
        const expense = await this.findExpense(user, id);
        const budget = await this.findBudget(user);
        if (expense.amount > update.amount) {
            const result = expense.amount - update.amount;
            budget.balance = budget.balance + result;
            await this.budgetRepository.save(budget);
        }
        if (budget.balance < update.amount) {
            throw new common_1.HttpException(`Insufficient funds.Your balance is ${budget.balance} ${budget.currency}.`, 406);
        }
        if (expense.amount < update.amount) {
            const result = update.amount - expense.amount;
            budget.balance = budget.balance - result;
            await this.budgetRepository.save(budget);
        }
        const updatedExp = this.expenseRepository.merge(expense, update);
        this.expenseRepository.save(updatedExp);
        return { message: `Update success.` };
    }
    async findBudget(id) {
        const budget = await this.budgetRepository.findOne({ where: { user: { id: id } }, relations: ["expenses", "incomes"] });
        if (!budget) {
            throw new common_1.HttpException(`Budget with id: ${id} not found.`, 404);
        }
        return budget;
    }
};
exports.ExpensesService = ExpensesService;
exports.ExpensesService = ExpensesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(expense_entity_1.Expense)),
    __param(1, (0, typeorm_1.InjectRepository)(budget_entity_1.Budget)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ExpensesService);
//# sourceMappingURL=expenses.service.js.map