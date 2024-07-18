import { Controller, Get, Param } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('api/v1/books')
export class BooksController {
    constructor(private booksService: BooksService) {}


  @Get('sort/:id') 
    sort(@Param('id') id :number) { 
      return this.booksService.sort(id); 
  }
@Get() 
  findAll() { 
    return this.booksService.findAll(); 
  }

  @Get(':bookId') 
  findBook(@Param('bookId') bookId: string) { 
    return this.booksService.findBook(bookId); 
  }
 //PRACTICA
 //cuando se envia un parametro se pone los dos puntos.
 //endpoint nombre/
  @Get('nombre/:nombre')
  ObtenerNombre(@Param('nombre') nombre:string) {
    return this.booksService.ObtenerNombre(nombre);
  }

  //CRUD
  
}
