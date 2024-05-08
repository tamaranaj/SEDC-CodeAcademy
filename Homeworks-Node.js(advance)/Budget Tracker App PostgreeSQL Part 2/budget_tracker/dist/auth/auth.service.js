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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const users_service_1 = require("../users/users.service");
const bcryptjs_1 = require("bcryptjs");
const typeorm_1 = require("@nestjs/typeorm");
const log_entity_1 = require("./log.entity");
const typeorm_2 = require("typeorm");
let AuthService = class AuthService {
    constructor(usersService, jwtService, logService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
        this.logService = logService;
    }
    async registerUser(user) {
        const foundUser = await this.usersService.findUserByEmail(user.email);
        const foundAdmin = await this.usersService.findAdminByEmail(user.email);
        if (foundUser || foundAdmin) {
            throw new common_1.BadRequestException(`User with email: ${user.email} already exist.`);
        }
        const hashedPass = await (0, bcryptjs_1.hash)(user.password, 10);
        user.password = hashedPass;
        const createdUser = await this.usersService.createUser(user);
        return createdUser;
    }
    async login(user) {
        const { email, password } = user;
        const foundUser = await this.usersService.findUserByEmail(email);
        const foundAdmin = await this.usersService.findAdminByEmail(email);
        if (!foundUser && !foundAdmin) {
            throw new common_1.NotFoundException(`User with ${email} does not exist.`);
        }
        if (foundUser) {
            const isPassValid = await (0, bcryptjs_1.compare)(password, foundUser.password);
            if (!isPassValid) {
                throw new common_1.UnauthorizedException('Invalid password.');
            }
            const token = await this.jwtService.signAsync({ userID: foundUser.id, email: foundUser.email });
            await this.logger(email);
            return token;
        }
        if (foundAdmin) {
            const isPassValid = await (0, bcryptjs_1.compare)(password, foundAdmin.password);
            if (!isPassValid) {
                throw new common_1.UnauthorizedException('Invalid password.');
            }
            const token = await this.jwtService.signAsync({ role: foundAdmin.role, email: foundAdmin.email });
            await this.logger(email);
            return token;
        }
    }
    async logger(email) {
        const loggedInUser = this.logService.create({ userEmail: email });
        await this.logService.save(loggedInUser);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(log_entity_1.LogORMEntity)),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map