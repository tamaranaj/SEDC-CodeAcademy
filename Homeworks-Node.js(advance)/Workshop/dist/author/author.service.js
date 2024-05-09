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
exports.AuthorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const author_entity_1 = require("./author.entity");
const typeorm_2 = require("typeorm");
const book_entity_1 = require("../book/book.entity");
let AuthorService = class AuthorService {
    constructor(authorRepo, booksRepo) {
        this.authorRepo = authorRepo;
        this.booksRepo = booksRepo;
    }
    async createAuthor(author) {
        const check = await this.authorRepo.findOne({ where: { lastName: author.lastName } });
        if (check) {
            throw new common_1.HttpException(`Author already exist`, 403);
        }
        const newAuthor = this.authorRepo.create(author);
        return await this.authorRepo.save(newAuthor);
    }
    async getAuthor() {
        const authors = await this.authorRepo.find({ relations: ["books"] });
        return authors;
    }
    async updateAuthor(id, update) {
        const author = await this.authorRepo.findOne({ where: { id: id } });
        if (!author) {
            throw new common_1.NotFoundException(`Author with id: ${id} was not found`);
        }
        const updatedAuthor = this.authorRepo.merge(author, update);
        await this.authorRepo.save(updatedAuthor);
        return { message: `Author with id ${id} is success updated.` };
    }
    async deleteAuthor(id) {
        const author = await this.authorRepo.findOne({ where: { id: id } });
        if (!author) {
            throw new common_1.NotFoundException(`Author with id: ${id} was not found`);
        }
        const books = await this.booksRepo.find({ where: { authorID: id } });
        books.forEach(item => this.booksRepo.delete(item));
        this.authorRepo.delete(author);
        return { message: `Author is deleted` };
    }
};
exports.AuthorService = AuthorService;
exports.AuthorService = AuthorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(author_entity_1.AuthorORMEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(book_entity_1.BookORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository, typeorm_2.Repository])
], AuthorService);
//# sourceMappingURL=author.service.js.map