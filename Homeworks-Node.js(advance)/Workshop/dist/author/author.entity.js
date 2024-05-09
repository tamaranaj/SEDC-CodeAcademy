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
exports.AuthorORMEntity = void 0;
const book_entity_1 = require("../book/book.entity");
const typeorm_1 = require("typeorm");
let AuthorORMEntity = class AuthorORMEntity {
};
exports.AuthorORMEntity = AuthorORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], AuthorORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorORMEntity.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorORMEntity.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorORMEntity.prototype, "from", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], AuthorORMEntity.prototype, "birthDate", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => book_entity_1.BookORMEntity, (books) => books.author),
    __metadata("design:type", Array)
], AuthorORMEntity.prototype, "books", void 0);
exports.AuthorORMEntity = AuthorORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "Authors" })
], AuthorORMEntity);
//# sourceMappingURL=author.entity.js.map