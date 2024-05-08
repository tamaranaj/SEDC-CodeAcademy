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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const admin_guard_1 = require("./admin.guard");
const swagger_1 = require("@nestjs/swagger");
let AdminController = class AdminController {
    constructor(adminService) {
        this.adminService = adminService;
    }
    async getAllUsers() {
        return await this.adminService.getUsers();
    }
    async getAllAdmins() {
        return await this.adminService.getAdmins();
    }
    async getBudgets() {
        return await this.adminService.getBudgets();
    }
    async getLogs() {
        const log = await this.adminService.getLogs();
        return log;
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('getUsers'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('getAdmins'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllAdmins", null);
__decorate([
    (0, common_1.Get)('getBudgets'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getBudgets", null);
__decorate([
    (0, common_1.Get)('logs'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getLogs", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.UseGuards)(admin_guard_1.AdminGuard),
    (0, swagger_1.ApiBearerAuth)(),
    (0, common_1.Controller)('admin'),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map