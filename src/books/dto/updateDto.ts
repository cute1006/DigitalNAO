import { ApiProperty } from "@nestjs/swagger";

export class UpdateBookDto {
  @ApiProperty({description:'El id:'})
    readonly id: number; 
    @ApiProperty({description:'Titulo del libro:'})
    readonly titulo: string;
    @ApiProperty({description:'La descripcion del libro:'})
    readonly descripcion: string;
    @ApiProperty({description:'Autor del libro:'})
    readonly autor: string;
    @ApiProperty({description:'Publicacion del libro:'})
    readonly publicacion: string;
    @ApiProperty({description:'Paginas del libro:'})
    readonly paginas: string;
  }