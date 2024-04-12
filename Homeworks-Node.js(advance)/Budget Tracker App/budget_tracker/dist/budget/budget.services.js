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
const currency_enum_1 = require("../enums/currency.enum");
const uuid_1 = require("uuid");
let BudgetService = class BudgetService {
    constructor() {
        this.budgets = [
            {
                id: (0, uuid_1.v4)(),
                title: 'kfjkgjg',
                balance: 50,
                currency: currency_enum_1.Currency.USD,
                expenses: [{ id: (0, uuid_1.v4)(), amount: 10, description: 'fdfdf' }],
                incomes: [{ id: (0, uuid_1.v4)(), amount: 100, description: 'salary' }],
            },
            {
                id: (0, uuid_1.v4)(),
                title: 'kfjkgjg',
                balance: 100,
                currency: currency_enum_1.Currency.EUR,
                expenses: [{ id: (0, uuid_1.v4)(), amount: 10, description: 'food' }],
                incomes: [{ id: (0, uuid_1.v4)(), amount: 50, description: 'fdgf' }],
            },
        ];
    }
    readBudgets() {
        return this.budgets;
    }
};
exports.BudgetService = BudgetService;
exports.BudgetService = BudgetService = __decorate([
    (0, common_1.Injectable)()
], BudgetService);
//# sourceMappingURL=budget.services.js.map