import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    findAll(): any { 
        return 'funcionando';
      }

    findBook(bookId: string) {
        return `findBook funcionando con bookId: ${bookId}`;
    }
}
