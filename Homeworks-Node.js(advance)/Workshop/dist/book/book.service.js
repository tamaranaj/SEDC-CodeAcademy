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
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./book.entity");
const typeorm_2 = require("typeorm");
const author_entity_1 = require("../author/author.entity");
let BookService = class BookService {
    constructor(bookRepo, authorRepo) {
        this.bookRepo = bookRepo;
        this.authorRepo = authorRepo;
    }
    async createBook(book) {
        const author = await this.authorRepo.findOne({ where: { id: book.authorID } });
        if (!author) {
            throw new common_1.NotFoundException(`Author with id: ${book.authorID} was not found`);
        }
        const newBook = this.bookRepo.create(book);
        return await this.bookRepo.save(newBook);
    }
    async getBooks() {
        return await this.bookRepo.find({ relations: ['author'] });
    }
    async getById(id) {
        const book = await this.bookRepo.findOne({ where: { id: id }, relations: ["author"] });
        if (!book) {
            throw new common_1.NotFoundException(`Book with id ${id} was not found`);
        }
        return book;
    }
    async deleteBook(id) {
        const book = await this.getById(id);
        if (!book) {
            throw new common_1.NotFoundException(`Book with id: ${id} was not found`);
        }
        await this.bookRepo.delete(book);
        return { message: `Book with id ${id} was deleted.` };
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.BookORMEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(author_entity_1.AuthorORMEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], BookService);
//# sourceMappingURL=book.service.js.map