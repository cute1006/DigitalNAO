import { Test, TestingModule } from '@nestjs/testing';
import { BooksService } from './books.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { repositoryMockFactory } from './books.controller.spec';
import { Books } from './entities/book.entity';
import { CreateBookDto } from './dto/bookDto';

describe('BooksService', () => {
  let service: BooksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        BooksService,
        { provide: getRepositoryToken(Books), useFactory: repositoryMockFactory },
      ],
    }).compile();

    service = module.get<BooksService>(BooksService);
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
     // const bookDto: CreateBookDto = { titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};
      const book = new Books();
      book.id_book = 5;
      book.titulo = 'Mariposa';
      book.descripcion = 'La mariposa perdida';
      book.autor= 'correcto',
      book.publicacion='correcto',
      book.paginas='correcto'

      const response: Books = {
        id_book:5,
        titulo: 'Mariposa',
        descripcion: 'La mariposa perdida',
        autor: 'correcto',
        publicacion:'correcto',
        paginas:'correcto'
      }

      jest.spyOn(service, 'createBook').mockResolvedValue(response);
    });

    describe('updateBook', () => {
      it('should update an existing book', async () => {
        const book = new Books();
        book.id_book = 5;
       book.titulo = 'Mariposa';
       book.descripcion = 'La mariposa perdida';
       book.autor= 'Martinez',
       book.publicacion='15-12-1995',
       book.paginas='100'
 
       const response: Books = {id_book: 5,
        titulo: 'Mariposa', 
        descripcion: 'La mariposa perdida', 
        autor: 'Martinez', 
        publicacion: '15-12-1995', 
        paginas: '100'};
 
        jest.spyOn(service, 'updateBook').mockResolvedValue(response);
      });
    });

    describe('readBook', () => {
      it('should return a book by id', async () => {
        const book = new Books();
        book.id_book = 5;
        book.titulo = 'Mariposa';
       book.descripcion = 'La mariposa perdida';
       book.autor= 'Martinez',
       book.publicacion='15-12-1995',
       book.paginas='100'
        //bookService
       const response: Books = {id_book: 5,
        titulo: 'Mariposa', 
        descripcion: 'La mariposa perdida', 
        autor: 'Martinez',
         publicacion: '15-12-1995', 
         paginas: '100'};
          //bookService
        jest.spyOn(service, 'readBook').mockResolvedValue(response);
         //bookController
      });
    });

    describe('deleteBook', () => {
      it('should delete a book', async () => {
      
       const book = new Books();
       book.id_book = 5;
       book.titulo = 'Mariposa';
       book.descripcion = 'La mariposa perdida';
       book.autor= 'Martinez',
       book.publicacion='15-12-1995',
       book.paginas='100'
 
       const response: Books = {id_book: 5,titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};
        //bookService
        jest.spyOn(service, 'deleteBook').mockResolvedValue(response);
         //bookController
      });
    });
      
    

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
});