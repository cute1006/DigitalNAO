import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { LoginDto } from './dto/login.dto';

import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    
  ) {}
  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
  //metodo que se utilizo para la parte del token
  async login(login : LoginDto){
    try{
      
        const payload = { sub: 1, username: 'mmeza' };
        return {
          success: `El usuario mmeza si existe`,
          error: null,
          data:  {
              token: await this.jwtService.signAsync(payload),
              user: 1
          }
        
      } 
    }catch(e){
      return {
        success: null,
        error: `hubo un inconveniente ${e}`
      }
    }
  }
}
