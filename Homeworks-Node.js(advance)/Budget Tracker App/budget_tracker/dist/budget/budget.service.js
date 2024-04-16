"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetService = void 0;
const common_1 = require("@nestjs/common");
const budget_entity_1 = require("./entities/budget.entity");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [];
    }
    readBudgets() {
        return this.budgets;
    }
    createBudget(budgetCreation) {
        const budget = new budget_entity_1.Budget(budgetCreation.title, budgetCreation.balance, budgetCreation.currency, budgetCreation.expenses, budgetCreation.incomes);
        this.budgets.push(budget);
        return budget.id;
    }
    findByID(id) {
        const budget = this.budgets.find((item) => item.id === id);
        if (!budget) {
            throw new common_1.NotFoundException(`Budget with id: ${id} not found!`);
        }
        return budget;
    }
    deleteByID(id) {
        const budget = this.findByID(id);
        this.budgets = this.budgets.filter((item) => item.id !== id);
    }
    updateByID(id, budgetUpdate) {
        const budget = this.findByID(id);
        console.log(budget);
        budget.title = !budgetUpdate.title ? budget.title : budgetUpdate.title;
        budget.balance = !budgetUpdate.balance ? budget.balance : budgetUpdate.balance;
        budget.currency = !budgetUpdate.currency ? budget.currency : budgetUpdate.currency;
        budget.expenses[0].amount = !budgetUpdate.expenses.amount ? budget.expenses[0].amount : budgetUpdate.expenses.amount;
        budget.expenses[0].description = !budgetUpdate.expenses.description ? budget.expenses[0].description : budgetUpdate.expenses.description;
        budget.incomes[0].amount = !budgetUpdate.incomes.amount ? budget.incomes[0].amount : budgetUpdate.incomes.amount;
        budget.incomes[0].description = !budgetUpdate.incomes.description ? budget.incomes[0].description : budgetUpdate.incomes.description;
        budget.updatedAt = new Date().getTime();
        return budget;
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
//# sourceMappingURL=budget.service.js.map