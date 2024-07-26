import { Test, TestingModule } from '@nestjs/testing';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { Auth } from './entities/auth.entity';

// describe('AuthController', () => {
//   let controller: AuthController;

//   beforeEach(async () => {
//     const module: TestingModule = await Test.createTestingModule({
//       controllers: [AuthController],
//       providers: [AuthService],
//     }).compile();

//     controller = module.get<AuthController>(AuthController);
//   });

//   it('should be defined', () => {
//     expect(controller).toBeDefined();
//   });
// });
//se modifico
describe('AuthController', () => {
  let authController: AuthController;
  let authService: AuthService;
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [
        AuthService,
        {
          provide: AuthService,
          useValue: {
            // Aquí puedes mockear las funciones que usas en el controlador
            login: jest.fn().mockResolvedValue([]),
          },
        },
      ],
    }).compile();
    authController = module.get<AuthController>(AuthController);
    authService = module.get<AuthService>(AuthService);
  });
  describe('login', () => {
    it('should creat a user', async () => {
      const loginDto: LoginDto = { username:"maria",password:"123"};
     const login1 = new Auth();
     login1.username = 'maria';
     login1.password='123';

      //bookService
      jest.spyOn(authService, 'login').mockResolvedValue(login1);
       //bookController
      expect(await authController.login(loginDto)).toEqual(login1);
    });
  });
  it('should be defined', () => {
    expect(authController).toBeDefined();
  });
});









