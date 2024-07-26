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
exports.CreateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const class_validator_1 = require("class-validator");
class CreateBookDto {
}
exports.CreateBookDto = CreateBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Titulo del libro:' }),
    (0, class_validator_1.IsString)({ message: 'Titulo del libro' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Descripcion del libro:' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Autor:' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publicacion:' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "publicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Numero de pagina:' }),
    __metadata("design:type", String)
], CreateBookDto.prototype, "paginas", void 0);
//# sourceMappingURL=bookDto.js.map