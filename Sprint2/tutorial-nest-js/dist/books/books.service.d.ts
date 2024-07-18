import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { Book } from './book.class';
export declare class BooksService {
    books: Book[];
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    sort(id: number): string;
    readBook(id: number): Book;
    createBook(newBook: BookDto): BookDto;
    updateBook(id: number, book: UpdateBookDto): UpdateBookDto | "El id es requerido";
    deleteBook(id: number): string;
}
