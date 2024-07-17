import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    findAll(): any { 
        return 'funcionando';
      }

    findBook(bookId: string) {
        return `findBook funcionando con bookId: ${bookId}`;
    }
    
    ObtenerNombre(nombre : string){
         return `El nombre es: ${nombre}`;
    }

    sort(id : number){
        return `El id es: ${id}`;
    }

    createBook(newBook: any) {
        return newBook;
    }
}
