"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
const common_1 = require("@nestjs/common");
let BooksService = class BooksService {
    constructor() {
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
    createBook(newBook) {
        return newBook;
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
    (0, common_1.Injectable)()
], BooksService);
//# sourceMappingURL=books.service.js.map