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
exports.ExpensesController = void 0;
const common_1 = require("@nestjs/common");
const expenses_service_1 = require("./expenses.service");
const expense_create_dto_1 = require("./dtos/expense.create.dto");
const update_create_dto_1 = require("./dtos/update.create.dto");
let ExpensesController = class ExpensesController {
    constructor(expenseService) {
        this.expenseService = expenseService;
    }
    getExpenses() {
        return this.expenseService.getExpenses();
    }
    findExpense(id) {
        return this.expenseService.findExpense(id);
    }
    createExpense(expense) {
        return this.expenseService.createExpense(expense);
    }
    updateExpense(id, update) {
        return this.expenseService.updateExpense(update, id);
    }
};
exports.ExpensesController = ExpensesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ExpensesController.prototype, "getExpenses", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ExpensesController.prototype, "findExpense", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [expense_create_dto_1.ExpenseCreateDTO]),
    __metadata("design:returntype", Promise)
], ExpensesController.prototype, "createExpense", null);
__decorate([
    (0, common_1.Put)(":id"),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_create_dto_1.ExpenseUpdateDTO]),
    __metadata("design:returntype", Promise)
], ExpensesController.prototype, "updateExpense", null);
exports.ExpensesController = ExpensesController = __decorate([
    (0, common_1.Controller)('expenses'),
    __metadata("design:paramtypes", [expenses_service_1.ExpensesService])
], ExpensesController);
//# sourceMappingURL=expenses.controller.js.map