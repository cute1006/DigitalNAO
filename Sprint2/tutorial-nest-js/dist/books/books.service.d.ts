import { CreateBookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { Book } from './book.class';
import { Books } from './entities/book.entity';
import { Repository } from 'typeorm';
export declare class BooksService {
    private readonly bookRepository;
    constructor(bookRepository: Repository<Books>);
    books: Book[];
    findAll(): any;
    findBook(bookId: string): string;
    ObtenerNombre(nombre: string): string;
    sort(id: number): string;
    readBook(id_book: number): Promise<Books>;
    createBook(newBook: CreateBookDto): Promise<Books>;
    updateBook(id: number, book: UpdateBookDto): Promise<Books>;
    deleteBook(id_book: number): Promise<Books>;
}
