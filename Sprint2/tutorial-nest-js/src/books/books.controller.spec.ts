import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Repository } from 'typeorm';
import { Books } from './entities/book.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
import { CreateBookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
describe('BooksController', () => {
  let controller: BooksController;
  let service: BooksService;
  //let repositoryMock: Repository<Books>;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BooksController],

      providers: [
        { provide: getRepositoryToken(Books), useFactory: repositoryMockFactory },
        BooksService,
        JwtService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('signed-token'),
            verify: jest.fn().mockReturnValue({ userId: 1 }),
          },
        },
      ],
      imports: [
        JwtModule.register({
          secret: 'test-secret', // Replace with your secret or mock it
          signOptions: { expiresIn: '1d' },
        }),
      ],
    }).compile();
    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('createBook', () => {
    it('should create a new book', async () => {
      const bookDto: CreateBookDto = { titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};
      const book = new Books();
      book.id_book = 5;
      book.titulo = 'Mariposa';
      book.descripcion = 'La mariposa perdida';
      book.autor= 'correcto',
      book.publicacion='correcto',
      book.paginas='correcto'
      const responseData: Books = {
        id_book:5,
        titulo: 'Mariposa',
        descripcion: 'La mariposa perdida',
        autor: 'correcto',
        publicacion:'correcto',
        paginas:'correcto'
      }

      jest.spyOn(service, 'createBook').mockResolvedValue(responseData);

      expect(await controller.createBook(bookDto)).toEqual(book);
    });
  });

   describe('updateBook', () => {
     it('should update an existing book', async () => {
       const bookDto: UpdateBookDto = { id: 5,titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};
       const book = new Books();
       book.id_book = 5;
      book.titulo = 'Mariposa';
      book.descripcion = 'La mariposa perdida';
      book.autor= 'Martinez',
      book.publicacion='15-12-1995',
      book.paginas='100'

      const response: Books = {id_book: 5,titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};

       jest.spyOn(service, 'updateBook').mockResolvedValue(response);

       expect(await controller.updateBook(5, bookDto)).toEqual(book);
     });
   });

   describe('readBook', () => {
     it('should return a book by id', async () => {
      //bookController
      const bookId: number = 5;
       const book = new Books();
       book.id_book = 5;
       book.titulo = 'Mariposa';
      book.descripcion = 'La mariposa perdida';
      book.autor= 'Martinez',
      book.publicacion='15-12-1995',
      book.paginas='100'
       //bookService
      const response: Books = {id_book: 5,titulo: 'Mariposa', descripcion: 'La mariposa perdida', autor: 'Martinez', publicacion: '15-12-1995', paginas: '100'};
         //bookService
       jest.spyOn(service, 'readBook').mockResolvedValue(response);
        //bookController
       expect(await controller.readBook(bookId)).toEqual(book);
     });
   });


   describe('deleteBook', () => {
     it('should delete a book', async () => {
      const bookId: number = 5;
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
       expect(await controller.deleteBook(bookId)).toEqual(book);
     });
   });

});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));










