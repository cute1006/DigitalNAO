import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { AuthGuard } from 'src/guard/auth.guard';

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


  //crud
  //read
  @Get('readId/:readId')
  readBook(@Param('readId') readId : number){
    return this.booksService.readBook(readId)
  }
  //create
  @UseGuards(AuthGuard)
  @Post()
  createBook(@Body() dto :BookDto){
    return this.booksService.createBook(dto);
  }
  //Modificacion
  @Put('/:bookId')
  updateBook(@Param('bookId') bookId: number,  @Body() dto :UpdateBookDto){
    return this.booksService.updateBook(bookId , dto);
  }
  //eliminar
  @Delete('/:id')
    deleteBook(@Param('id') id : number ) {
        return this.booksService.deleteBook(id);
    }
  

}
