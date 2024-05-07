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
exports.IncomesController = void 0;
const common_1 = require("@nestjs/common");
const incomes_service_1 = require("./incomes.service");
const income_create_dto_1 = require("./dtos/income.create.dto");
const income_update_dto_1 = require("./dtos/income.update.dto");
const auth_guard_1 = require("../auth/auth.guard");
const swagger_1 = require("@nestjs/swagger");
let IncomesController = class IncomesController {
    constructor(incomeService) {
        this.incomeService = incomeService;
    }
    async getIncomes(request) {
        const userId = request['user'].userID;
        return await this.incomeService.getIncomes(userId);
    }
    async findIncome(id, request) {
        const userId = request['user'].userID;
        return await this.incomeService.findIncome(userId, id);
    }
    async createIncome(income, request) {
        const userId = request['user'].userID;
        return await this.incomeService.createIncome(userId, income);
    }
    async updateIncome(incomeId, update, request) {
        const userId = request['user'].userID;
        return await this.incomeService.updateIncome(incomeId, userId, update);
    }
};
exports.IncomesController = IncomesController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "getIncomes", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "findIncome", null);
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(201),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [income_create_dto_1.IncomeCreateDTO, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "createIncome", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, income_update_dto_1.IncomeUpdateDTO, Object]),
    __metadata("design:returntype", Promise)
], IncomesController.prototype, "updateIncome", null);
exports.IncomesController = IncomesController = __decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('incomes'),
    __metadata("design:paramtypes", [incomes_service_1.IncomesService])
], IncomesController);
//# sourceMappingURL=incomes.controller.js.map