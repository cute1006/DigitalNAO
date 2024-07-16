import { Controller, Get } from '@nestjs/common';
import { BooksService } from './books.service';

@Controller('api/v1/books')
export class BooksController {
    constructor(private booksService: BooksService) {}

@Get() 
  findAll() { 
    return this.booksService.findAll(); 
  }
}
