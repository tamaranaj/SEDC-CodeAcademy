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
exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AdminGuard = class AdminGuard {
    constructor(jwtService, configService) {
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async canActivate(context) {
        const req = context.switchToHttp().getRequest();
        const token = this.extractToken(req);
        if (!token) {
            throw new common_1.UnauthorizedException();
        }
        try {
            const jwtPayload = await this.jwtService.verifyAsync(token, this.configService.get('JWT_SECRET_ADMIN'));
            if (jwtPayload.role) {
                return true;
            }
            return false;
        }
        catch (error) {
            throw new common_1.UnauthorizedException({ message: error.message });
        }
    }
    extractToken(request) {
        const auth = request.headers.authorization || '';
        const splAuthHeader = auth.split(' ');
        const [_bearer, token] = splAuthHeader;
        return token;
    }
};
exports.AdminGuard = AdminGuard;
exports.AdminGuard = AdminGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService])
], AdminGuard);
//# sourceMappingURL=admin.guard.js.map