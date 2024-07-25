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

  // describe('findOneById', () => {
  //   it('should return a user by id', async () => {
  //     const user = new Users();
  //     user.user_id = 1;
  //     user.nombre = 'John Doe';
  //     user.email = 'john@example.com';

  //     jest.spyOn(service, 'findOneById').mockResolvedValue(user);

  //     expect(await controller.findOneById(1)).toEqual(user);
  //   });
  // });

  // describe('findAll', () => {
  //   it('should return an array of users', async () => {
  //     const user = new Users();
  //     user.user_id = 1;
  //     user.nombre = 'John Doe';
  //     user.email = 'john@example.com';

  //     jest.spyOn(service, 'findAll').mockResolvedValue([user]);

  //     expect(await controller.findAll()).toEqual([user]);
  //   });
  // });

  // describe('delete', () => {
  //   it('should delete a user', async () => {
  //     const result = { affected: 1 };
  //     jest.spyOn(service, 'delete').mockResolvedValue(result);

  //     expect(await controller.delete(1)).toEqual(result);
  //   });
  // });

});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));










