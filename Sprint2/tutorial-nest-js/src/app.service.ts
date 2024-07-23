import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
    return "Hello World!"
  }
  usuario(): any{
    return {
      nombre: 'maria',
      apellido: 'meza',
      ubicacion: {
        pais: 'nicaragua',
        municipio: 'trtffr'
      }
  };
  }
}
