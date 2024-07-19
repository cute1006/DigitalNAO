import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { Book } from './book.class';
import { Books } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BooksService {
    private readonly userRepository;
    constructor(userRepository: Repository<Books>);
    books: Book[];
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    sort(id: number): string;
    readBook(id: number): Book;
    createBook(newBook: BookDto): Promise<Books>;
    updateBook(id: number, book: UpdateBookDto): UpdateBookDto | "El id es requerido";
    deleteBook(id: number): string;
}
