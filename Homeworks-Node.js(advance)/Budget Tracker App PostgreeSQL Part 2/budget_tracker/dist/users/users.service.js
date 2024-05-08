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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_entity_1 = require("./users.entity");
const typeorm_2 = require("typeorm");
const adimn_entity_1 = require("./adimn.entity");
let UsersService = class UsersService {
    constructor(usersRepository, adminRepository) {
        this.usersRepository = usersRepository;
        this.adminRepository = adminRepository;
    }
    async findUserByEmail(email) {
        const user = await this.usersRepository.findOne({ where: { email: email }, relations: ["budget"] });
        return user;
    }
    async findUserByID(id) {
        const user = await this.usersRepository.findOne({ where: { id: id }, relations: ['budget'] });
        return user;
    }
    async findAdminByEmail(email) {
        const admin = await this.adminRepository.findOne({ where: { email: email } });
        return admin;
    }
    async createUser(newUser) {
        if (newUser.role === 'Admin') {
            const admin = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            };
            const newAdmin = this.adminRepository.create(admin);
            await this.adminRepository.save(newAdmin);
            return { message: `User ${newAdmin.firstName} is success registered with id: ${newAdmin.id}` };
        }
        if (newUser.role === 'User') {
            const user = {
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                email: newUser.email,
                password: newUser.password
            };
            const addUser = this.usersRepository.create(user);
            await this.usersRepository.save(addUser);
            return { message: `User ${addUser.firstName} is success registered with id: ${addUser.id}` };
        }
    }
    async getAllUsers() {
        return this.usersRepository.find({ relations: ["budget"] });
    }
    async deleteBudget(userID) {
        const user = await this.findUserByID(userID);
        user.budget = null;
        await this.usersRepository.save(user);
    }
    async getAllAdmins() {
        return this.adminRepository.find();
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(users_entity_1.UsersORMEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(adimn_entity_1.AdminORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
//# sourceMappingURL=users.service.js.map