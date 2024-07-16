import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): any {
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
