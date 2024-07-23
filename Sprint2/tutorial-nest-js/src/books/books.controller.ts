import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { BooksService } from './books.service';
import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { AuthGuard } from '../guard/auth.guard';
import { ApiBasicAuth, ApiBearerAuth, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiBearerAuth()
@ApiTags('books')
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
  @UseGuards(AuthGuard)
  @ApiResponse({status:403,description:'Sin autorizacion'})
  @Get('readId/:readId')
  @ApiOperation({summary: 'Metodo para busqueda un libro'})
  readBook(@Param('readId') readId : number){
    return this.booksService.readBook(readId)
  }
  //create
  @UseGuards(AuthGuard)
  @Post()
  @ApiResponse({status:403,description:'Sin autorizacion'})
  @ApiOperation({summary: 'Metodo para crear un nuevo libro'})
  createBook(@Body() dto :BookDto){
    return this.booksService.createBook(dto);
  }
  //Modificacion
  @UseGuards(AuthGuard)
  @Put('/:bookId')
  @ApiResponse({status:403,description:'Sin autorizacion'})
  @ApiOperation({summary: 'Metodo para actualizar un libro'})
  updateBook(@Param('bookId') bookId: number,  @Body() dto :UpdateBookDto){
    return this.booksService.updateBook(bookId , dto);
  }
  //eliminar
  @UseGuards(AuthGuard)
  @Delete('/:id')
  @ApiResponse({status:403,description:'Sin autorizacion'})
  @ApiOperation({summary: 'Metodo para eliminar el libro'})
    deleteBook(@Param('id') id : number ) {
        return this.booksService.deleteBook(id);
    }
  

}
