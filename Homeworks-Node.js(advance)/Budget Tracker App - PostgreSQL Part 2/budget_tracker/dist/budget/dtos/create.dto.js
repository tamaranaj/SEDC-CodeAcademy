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
exports.BudgetCreateDTO = void 0;
const currency_enum_1 = require("../../enums/currency.enum");
const class_validator_1 = require("class-validator");
const swagger_1 = require("@nestjs/swagger");
class BudgetCreateDTO {
}
exports.BudgetCreateDTO = BudgetCreateDTO;
__decorate([
    (0, swagger_1.ApiProperty)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], BudgetCreateDTO.prototype, "balance", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ enum: currency_enum_1.Currency, examples: ['MKD', 'EUR', 'USD'] }),
    (0, class_validator_1.IsEnum)(currency_enum_1.Currency),
    __metadata("design:type", String)
], BudgetCreateDTO.prototype, "currency", void 0);
//# sourceMappingURL=create.dto.js.map