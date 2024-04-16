"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IncomeEntity = exports.ExpenseEntity = void 0;
const generateID_1 = require("../../helperServices/generateID");
class ExpenseEntity {
    constructor(amount, description) {
        this.id = (0, generateID_1.generateID)();
        this.amount = amount;
        this.description = description;
    }
}
exports.ExpenseEntity = ExpenseEntity;
class IncomeEntity {
    constructor(amount, description) {
        this.id = (0, generateID_1.generateID)();
        this.amount = amount;
        this.description = description;
    }
}
exports.IncomeEntity = IncomeEntity;
//# sourceMappingURL=budget.interfaces.js.map