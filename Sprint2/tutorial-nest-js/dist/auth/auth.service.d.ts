import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly authRepository;
    private jwtService;
    constructor(authRepository: Repository<Auth>, jwtService: JwtService);
    create(createAuthDto: CreateAuthDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateAuthDto: UpdateAuthDto): string;
    remove(id: number): string;
    login(login: LoginDto): Promise<{
        success: string;
        error: any;
        data: {
            token: string;
            user: number;
        };
    } | {
        success: any;
        error: string;
        data?: undefined;
    }>;
}
