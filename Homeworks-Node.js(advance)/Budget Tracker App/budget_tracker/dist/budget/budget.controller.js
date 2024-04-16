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
exports.BudgetController = void 0;
const common_1 = require("@nestjs/common");
const budget_service_1 = require("./budget.service");
const budgetCreate_DTO_1 = require("./DTO/budgetCreate.DTO");
const budget_entity_1 = require("./entities/budget.entity");
const budget_interfaces_1 = require("./entities/interfaces/budget.interfaces");
const budgetUpdate_DTO_1 = require("./DTO/budgetUpdate.DTO");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    listBudgets() {
        return this.budgetService.readBudgets();
    }
    addBudget(reqBody) {
        const { title, balance, currency, expenses, incomes } = reqBody;
        const newexp = new budget_interfaces_1.ExpenseEntity(expenses.amount, expenses.description);
        const newinc = new budget_interfaces_1.IncomeEntity(incomes.amount, incomes.description);
        const budgetCreation = new budget_entity_1.BudgetCreation(title, balance, currency);
        budgetCreation.addExInc(newexp, newinc);
        const id = this.budgetService.createBudget(budgetCreation);
        return { message: "Budget crated", budgetID: id };
    }
    findBudget(id) {
        const budget = this.budgetService.findByID(id);
        return budget;
    }
    removeBudget(id) {
        this.budgetService.deleteByID(id);
        return { message: `Budget with id: ${id} is deleted.` };
    }
    updateBudget(id, budgetUpdate) {
        const { title, balance, currency, expenses, incomes } = budgetUpdate;
        const budgetToUPD = new budget_entity_1.BudgetUpdate(title, balance, currency, expenses, incomes);
        const budget = this.budgetService.updateByID(id, budgetToUPD);
        return { updatedBudget: budget };
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "listBudgets", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [budgetCreate_DTO_1.BudgetDTO]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "addBudget", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "findBudget", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "removeBudget", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, budgetUpdate_DTO_1.BudgetUpdateDTO]),
    __metadata("design:returntype", void 0)
], BudgetController.prototype, "updateBudget", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.Controller)('budget'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map