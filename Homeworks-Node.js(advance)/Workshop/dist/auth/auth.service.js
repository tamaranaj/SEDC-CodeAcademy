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
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const bcryptjs_1 = require("bcryptjs");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userRepo, jwtService) {
        this.userRepo = userRepo;
        this.jwtService = jwtService;
    }
    async register(user) {
        const checkEmail = await this.userRepo.findOne({ where: { email: user.email } });
        if (checkEmail) {
            throw new common_1.HttpException(`User with email ${user.email} already exist`, 403);
        }
        const hashedPass = await (0, bcryptjs_1.hash)(user.password, 8);
        user.password = hashedPass;
        const newUser = this.userRepo.create(user);
        await this.userRepo.save(newUser);
        return { message: 'Acc is created', id: newUser.id };
    }
    async login(user) {
        const foundUser = await this.userRepo.findOne({ where: { email: user.email } });
        if (!foundUser) {
            throw new common_1.NotFoundException(`User with email ${user.email} not found.`);
        }
        const checkPass = await (0, bcryptjs_1.compare)(user.password, foundUser.password);
        if (!checkPass) {
        }
        const token = await this.jwtService.signAsync({ email: foundUser.email });
        return { message: `Login success`, accessToken: token };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.UsersORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map