import { BookDto } from './bookDto';
export declare class BooksService {
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    sort(id: number): string;
    createBook(newBook: BookDto): BookDto;
}
