import { BooksService } from './books.service';
import { UpdateBookDto } from './dto/updateDto';
import { CreateBookDto } from './dto/bookDto';
export declare class BooksController {
    private booksService;
    constructor(booksService: BooksService);
    sort(id: number): string;
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    readBook(readId: number): Promise<import("./entities/book.entity").Books>;
    createBook(dto: CreateBookDto): Promise<import("./entities/book.entity").Books>;
    updateBook(bookId: number, dto: UpdateBookDto): Promise<import("./entities/book.entity").Books>;
    deleteBook(id: number): Promise<import("./entities/book.entity").Books>;
}
