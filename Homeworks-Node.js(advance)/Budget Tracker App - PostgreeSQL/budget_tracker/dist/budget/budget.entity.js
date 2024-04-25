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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Budget = void 0;
const currency_enum_1 = require("../enums/currency.enum");
const expense_entity_1 = require("../expenses/expense.entity");
const income_entity_1 = require("../incomes/income.entity");
const typeorm_1 = require("typeorm");
let Budget = class Budget {
};
exports.Budget = Budget;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Budget.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar"
    }),
    __metadata("design:type", String)
], Budget.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: "varchar"
    }),
    __metadata("design:type", String)
], Budget.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: 0
    }),
    __metadata("design:type", Number)
], Budget.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)({
        enum: currency_enum_1.Currency,
        enumName: "currency"
    }),
    __metadata("design:type", String)
], Budget.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => expense_entity_1.Expense, (expense) => expense.budget),
    __metadata("design:type", Array)
], Budget.prototype, "expenses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => income_entity_1.Income, (income) => income.budget),
    __metadata("design:type", Array)
], Budget.prototype, "incomes", void 0);
exports.Budget = Budget = __decorate([
    (0, typeorm_1.Entity)()
], Budget);
//# sourceMappingURL=budget.entity.js.map