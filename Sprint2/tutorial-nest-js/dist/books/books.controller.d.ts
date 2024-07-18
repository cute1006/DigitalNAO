import { BooksService } from './books.service';
import { BookDto } from './bookDto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    sort(id: number): string;
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    createBook(dto: BookDto): BookDto;
}
