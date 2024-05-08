"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminModule = void 0;
const common_1 = require("@nestjs/common");
const admin_controller_1 = require("./admin.controller");
const admin_service_1 = require("./admin.service");
const users_module_1 = require("../users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const budget_entity_1 = require("../budget/budget.entity");
const log_entity_1 = require("../auth/log.entity");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
let AdminModule = class AdminModule {
};
exports.AdminModule = AdminModule;
exports.AdminModule = AdminModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule, typeorm_1.TypeOrmModule.forFeature([budget_entity_1.Budget, log_entity_1.LogORMEntity]), jwt_1.JwtModule.registerAsync({
                inject: [config_1.ConfigService],
                global: false,
                useFactory(env) {
                    return {
                        secret: env.get('JWT_SECRET_ADMIN'),
                        signOptions: { expiresIn: '30min' }
                    };
                }
            })],
        controllers: [admin_controller_1.AdminController],
        providers: [admin_service_1.AdminService]
    })
], AdminModule);
//# sourceMappingURL=admin.module.js.map