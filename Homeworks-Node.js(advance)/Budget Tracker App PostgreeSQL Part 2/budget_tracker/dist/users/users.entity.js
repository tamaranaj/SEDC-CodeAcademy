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
exports.UsersORMEntity = void 0;
const budget_entity_1 = require("../budget/budget.entity");
const typeorm_1 = require("typeorm");
let UsersORMEntity = class UsersORMEntity {
};
exports.UsersORMEntity = UsersORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsersORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersORMEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], UsersORMEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersORMEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UsersORMEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], UsersORMEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => budget_entity_1.Budget, (budget) => budget.user),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", budget_entity_1.Budget)
], UsersORMEntity.prototype, "budget", void 0);
exports.UsersORMEntity = UsersORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], UsersORMEntity);
//# sourceMappingURL=users.entity.js.map