import { Test, TestingModule } from '@nestjs/testing';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { Repository } from 'typeorm';
import { Books } from './entities/book.entity';
import { getRepositoryToken } from '@nestjs/typeorm';
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
          signOptions: { expiresIn: '60s' },
        }),
      ],
    }).compile();
    controller = module.get<BooksController>(BooksController);
    service = module.get<BooksService>(BooksService);
  });
  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});

// @ts-ignore
export const repositoryMockFactory: () => MockType<Repository<any>> = jest.fn(() => ({
  findOne: jest.fn(entity => entity),
  // ...
}));







