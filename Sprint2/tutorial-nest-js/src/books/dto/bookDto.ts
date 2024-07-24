import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreateBookDto {
  @ApiProperty({description:'Titulo del libro:'})
  @IsString({message:'Titulo del libro'})//}
    readonly titulo: string;
    @ApiProperty({description:'Descripcion del libro:'})
    readonly descripcion: string;
    @ApiProperty({description:'Autor:'})
    readonly autor: string;
    @ApiProperty({description:'Publicacion:'})
    readonly publicacion: string;
    @ApiProperty({description:'Numero de pagina:'})
    readonly paginas: string;
  }