import { BooksService } from './books.service';
import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    sort(id: number): string;
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    readBook(readId: number): import("./book.class").Book;
    createBook(dto: BookDto): BookDto;
    updateBook(bookId: number, dto: UpdateBookDto): UpdateBookDto | "El id es requerido";
    deleteBook(id: number): string;
}
