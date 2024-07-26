import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
        type: 'postgres',
        host: 'dpg-cqhu8tcs1f4s73anltdg-a',
        port: 5432,
        database: 'book_xb16',
        username: 'book_xb16_user',
        password: '6dqgP7a3siavp9w3gG4IyJdbFCjrOv3e',
        entities: ['dist/**/*.entity{.ts,.js}'],
        synchronize: true
      }
    ),
    AuthModule,
    BooksModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
