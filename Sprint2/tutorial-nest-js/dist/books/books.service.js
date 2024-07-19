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
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const book_entity_1 = require("./entities/book.entity");
const typeorm_2 = require("typeorm");
let BooksService = class BooksService {
    constructor(userRepository) {
        this.userRepository = userRepository;
        this.books = [
            {
                id: 1,
                titulo: 'Una historia de España',
                descripcion: 'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
                autor: 'Arturo Pérez-Reverte',
                publicacion: 'Alfaguara',
                paginas: 256,
            },
            {
                id: 2,
                titulo: 'Historia de España contada para escépticos',
                descripcion: 'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
                autor: 'Juan Eslava Galán',
                publicacion: 'Booket',
                paginas: 592
            },
        ];
    }
    findAll() {
        return 'funcionando';
    }
    findBook(bookId) {
        return `findBook funcionando con bookId: ${bookId}`;
    }
    ObtenerNombre(nombre) {
        return `El nombre es: ${nombre}`;
    }
    sort(id) {
        return `El id es: ${id}`;
    }
    readBook(id) {
        return this.books[id - 1];
    }
    async createBook(newBook) {
        const books = new book_entity_1.Books();
        books.titulo = newBook.titulo;
        books.descripcion = newBook.descripcion;
        books.autor = newBook.autor;
        books.publicacion = newBook.publicacion;
        books.paginas = newBook.paginas;
        const bookInsert = await this.userRepository.save(books);
        return bookInsert;
    }
    updateBook(id, book) {
        console.log(book.id);
        if (book.id != undefined) {
            return book;
        }
        else {
            return 'El id es requerido';
        }
    }
    deleteBook(id) {
        return `El Libro con el Id : ${id} se ha eliminado con exito`;
    }
};
exports.BooksService = BooksService;
exports.BooksService = BooksService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(book_entity_1.Books)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], BooksService);
//# sourceMappingURL=books.service.js.map