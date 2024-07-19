import { Module } from '@nestjs/common';
import { Books } from './entities/book.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([Books]),
       
     ],
     controllers: [BooksController],
     providers: [BooksService],
     exports: [BooksService]
})
export class BooksModule {}
