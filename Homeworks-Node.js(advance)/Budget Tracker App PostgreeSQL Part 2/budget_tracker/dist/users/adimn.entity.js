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
exports.AdminORMEntity = void 0;
const typeorm_1 = require("typeorm");
let AdminORMEntity = class AdminORMEntity {
};
exports.AdminORMEntity = AdminORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], AdminORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminORMEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminORMEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AdminORMEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'varchar'
    }),
    __metadata("design:type", String)
], AdminORMEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)({
        default: "Admin"
    }),
    __metadata("design:type", String)
], AdminORMEntity.prototype, "role", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], AdminORMEntity.prototype, "createdAt", void 0);
exports.AdminORMEntity = AdminORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Admins' })
], AdminORMEntity);
//# sourceMappingURL=adimn.entity.js.map