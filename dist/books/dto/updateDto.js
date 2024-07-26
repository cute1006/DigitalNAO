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
exports.UpdateBookDto = void 0;
const swagger_1 = require("@nestjs/swagger");
class UpdateBookDto {
}
exports.UpdateBookDto = UpdateBookDto;
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'El id:' }),
    __metadata("design:type", Number)
], UpdateBookDto.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Titulo del libro:' }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "titulo", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'La descripcion del libro:' }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "descripcion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Autor del libro:' }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "autor", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Publicacion del libro:' }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "publicacion", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Paginas del libro:' }),
    __metadata("design:type", String)
], UpdateBookDto.prototype, "paginas", void 0);
//# sourceMappingURL=updateDto.js.map