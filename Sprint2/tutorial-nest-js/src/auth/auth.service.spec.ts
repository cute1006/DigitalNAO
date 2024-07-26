import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { Auth } from './entities/auth.entity';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        JwtService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn().mockReturnValue('signed-token'),
            verify: jest.fn().mockReturnValue({ userId: 1 }),
          },
        },

      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  describe('login', () => {
    it('should creat a user', async () => {
      const loginDto: LoginDto = { username:"maria",password:"123"};
     const login1 = new Auth();
     login1.username = 'maria';
     login1.password='123';

      //bookService
      jest.spyOn(service, 'login').mockResolvedValue(login1);
        });
  });
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
