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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const updateDto_1 = require("./dto/updateDto");
const auth_guard_1 = require("../guard/auth.guard");
const swagger_1 = require("@nestjs/swagger");
const bookDto_1 = require("./dto/bookDto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    sort(id) {
        return this.booksService.sort(id);
    }
    findAll() {
        return this.booksService.findAll();
    }
    findBook(bookId) {
        return this.booksService.findBook(bookId);
    }
    ObtenerNombre(nombre) {
        return this.booksService.ObtenerNombre(nombre);
    }
    readBook(readId) {
        return this.booksService.readBook(readId);
    }
    createBook(dto) {
        return this.booksService.createBook(dto);
    }
    updateBook(bookId, dto) {
        return this.booksService.updateBook(bookId, dto);
    }
    deleteBook(id) {
        return this.booksService.deleteBook(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.Get)('sort/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "sort", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':bookId'),
    __param(0, (0, common_1.Param)('bookId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findBook", null);
__decorate([
    (0, common_1.Get)('nombre/:nombre'),
    __param(0, (0, common_1.Param)('nombre')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "ObtenerNombre", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin autorizacion' }),
    (0, common_1.Get)('readId/:readId'),
    (0, swagger_1.ApiOperation)({ summary: 'Metodo para busqueda un libro' }),
    __param(0, (0, common_1.Param)('readId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "readBook", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Post)(),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin autorizacion' }),
    (0, swagger_1.ApiOperation)({ summary: 'Metodo para crear un nuevo libro' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bookDto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "createBook", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Put)('/:bookId'),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin autorizacion' }),
    (0, swagger_1.ApiOperation)({ summary: 'Metodo para actualizar un libro' }),
    __param(0, (0, common_1.Param)('bookId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, updateDto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "updateBook", null);
__decorate([
    (0, common_1.UseGuards)(auth_guard_1.AuthGuard),
    (0, common_1.Delete)('/:id'),
    (0, swagger_1.ApiResponse)({ status: 403, description: 'Sin autorizacion' }),
    (0, swagger_1.ApiOperation)({ summary: 'Metodo para eliminar el libro' }),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "deleteBook", null);
exports.BooksController = BooksController = __decorate([
    (0, swagger_1.ApiBearerAuth)(),
    (0, swagger_1.ApiTags)('books'),
    (0, common_1.Controller)('api/v1/books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map