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
exports.BookORMEntity = void 0;
const author_entity_1 = require("../author/author.entity");
const typeorm_1 = require("typeorm");
let BookORMEntity = class BookORMEntity {
};
exports.BookORMEntity = BookORMEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], BookORMEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookORMEntity.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookORMEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookORMEntity.prototype, "genre", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => author_entity_1.AuthorORMEntity, (author) => author.books),
    (0, typeorm_1.JoinColumn)({ name: "authorID" }),
    __metadata("design:type", author_entity_1.AuthorORMEntity)
], BookORMEntity.prototype, "author", void 0);
__decorate([
    (0, typeorm_1.Column)({
        nullable: false,
        type: 'uuid'
    }),
    __metadata("design:type", String)
], BookORMEntity.prototype, "authorID", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], BookORMEntity.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], BookORMEntity.prototype, "isbn", void 0);
exports.BookORMEntity = BookORMEntity = __decorate([
    (0, typeorm_1.Entity)({ name: "Books" })
], BookORMEntity);
//# sourceMappingURL=book.entity.js.map