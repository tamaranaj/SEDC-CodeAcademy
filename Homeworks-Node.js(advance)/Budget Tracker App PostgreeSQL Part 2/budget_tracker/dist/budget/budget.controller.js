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
const create_dto_1 = require("./dtos/create.dto");
const update_dto_1 = require("./dtos/update.dto");
const auth_guard_1 = require("../auth/guards/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let BudgetController = class BudgetController {
    constructor(budgetService) {
        this.budgetService = budgetService;
    }
    async getBudgets(request) {
        const user = request['user'].userID;
        const budget = await this.budgetService.getBudget(user);
        return budget;
    }
    async createBudget(budget, request) {
        const user = request['user'].userID;
        return await this.budgetService.createBudget(budget, user);
    }
    async updateBudget(update, request) {
        const user = request['user'].userID;
        return await this.budgetService.updateBudget(update, user);
    }
    async deleteBudget(request) {
        const user = request['user'].userID;
        return await this.budgetService.deleteBudget(user);
    }
};
exports.BudgetController = BudgetController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "getBudgets", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.BudgetCreateDTO, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "createBudget", null);
__decorate([
    (0, common_1.Put)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_dto_1.BudgetUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "updateBudget", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], BudgetController.prototype, "deleteBudget", null);
exports.BudgetController = BudgetController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('budget'),
    __metadata("design:paramtypes", [budget_service_1.BudgetService])
], BudgetController);
//# sourceMappingURL=budget.controller.js.map