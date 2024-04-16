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
exports.BudgetUpdateDTO = void 0;
const currency_enum_1 = require("../entities/enums/currency.enum");
const class_validator_1 = require("class-validator");
const class_transformer_1 = require("class-transformer");
class IncDTO {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], IncDTO.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(5),
    __metadata("design:type", String)
], IncDTO.prototype, "description", void 0);
class BudgetUpdateDTO {
}
exports.BudgetUpdateDTO = BudgetUpdateDTO;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MinLength)(3),
    __metadata("design:type", String)
], BudgetUpdateDTO.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BudgetUpdateDTO.prototype, "balance", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(currency_enum_1.Currency),
    __metadata("design:type", String)
], BudgetUpdateDTO.prototype, "currency", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => IncDTO),
    __metadata("design:type", IncDTO)
], BudgetUpdateDTO.prototype, "expenses", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => IncDTO),
    __metadata("design:type", IncDTO)
], BudgetUpdateDTO.prototype, "incomes", void 0);
//# sourceMappingURL=budgetUpdate.DTO.js.map