"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BudgetUpdate = exports.Budget = exports.BudgetCreation = void 0;
const generateID_1 = require("../helperServices/generateID");
class BudgetCreation {
    constructor(title, balance, currency) {
        this.title = title;
        this.balance = balance;
        this.currency = currency;
        this.expenses = [];
        this.incomes = [];
    }
    addExInc(exp, inc) {
        this.expenses.push(exp);
        this.incomes.push(inc);
    }
}
exports.BudgetCreation = BudgetCreation;
class Budget extends BudgetCreation {
    constructor(title, balance, currency, expenses, incomes) {
        super(title, balance, currency);
        this.expenses = expenses;
        this.incomes = incomes;
        this.id = (0, generateID_1.generateID)();
        this.createdAt = new Date().getTime();
    }
}
exports.Budget = Budget;
class BudgetUpdate {
    constructor(title, balance, currency, expenses, incomes) {
        this.title = title;
        this.balance = balance;
        this.currency = currency;
        this.expenses = expenses;
        this.incomes = incomes;
    }
}
exports.BudgetUpdate = BudgetUpdate;
//# sourceMappingURL=budget.entity.js.map