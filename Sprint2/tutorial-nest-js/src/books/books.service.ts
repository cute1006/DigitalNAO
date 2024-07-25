import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { Book } from './book.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/book.entity';
import { Repository } from 'typeorm';
import { promises } from 'dns';


@Injectable()
export class BooksService {
  constructor(
    //conexion a la tabla book
    @InjectRepository(Books)
    private readonly bookRepository: Repository<Books>,
    
  ) {}
    books: Book[] = [ 
        {
          id: 1,
          titulo: 'Una historia de España',
          descripcion:
            'Un relato ameno, personal, a ratos irónico, pero siempre único, de nuestra accidentada historia a través de los siglos. Una obra concebida por el autor para, en palabras suyas, «divertirme, releer y disfrutar; un pretexto para mirar atrás desde los tiempos remotos hasta el presente, reflexionar un poco sobre ello y contarlo por escrito de una manera poco ortodoxa.',
          autor: 'Arturo Pérez-Reverte',
          publicacion: 'Alfaguara',
          paginas: 256,
        },
        {
          id: 2,
          titulo: 'Historia de España contada para escépticos',
          descripcion:
            'Como escribe el autor, no pretende ser veraz, justa y desapasionada, porque ninguna historia lo es. No está hecha para halagar a reyes y gobernantes, ni pretende halagar a los banqueros, ni a la Conferencia Episcopal, ni al colectivo gay.',
            autor: 'Juan Eslava Galán',
            publicacion: 'Booket',
            paginas: 592
        },
      ];
    findAll(): any { 
        return 'funcionando';
      }

    findBook(bookId: string) {
        return `findBook funcionando con bookId: ${bookId}`;
    }
    
    ObtenerNombre(nombre : string){
         return `El nombre es: ${nombre}`;
    }

    sort(id : number){
        return `El id es: ${id}`;
    }
    //crud

    async readBook(id_book:number): Promise<Books>{
      const bo: Books = await this.bookRepository.findOne({where: {id_book} } );
      if (!bo){
        throw new NotFoundException("No se encontro Ningun libro");
      }
      return bo;
        // return await this.bookRepository.find()
         //this.books[id-1];
    
  }

    async createBook(newBook: CreateBookDto) {
      const books: Books = new Books();
      //referencia entity   //dto
      books.titulo = newBook.titulo
      books.descripcion = newBook.descripcion
      books.autor = newBook.autor
      books.publicacion = newBook.publicacion
      books.paginas = newBook.paginas
      const bookInsert = await this.bookRepository.save(books);
      
        return  bookInsert;
    }

    async updateBook(id : number ,book: UpdateBookDto) {
        /*console.log(book.id)
        if (book.id != undefined ){
            return book;
        }
        else{
            return 'El id es requerido'
        }*/

            const actualizar: Books = new Books(); 
            //referencia entity     //dto
            actualizar.id_book    =book.id
            actualizar.titulo     =book.titulo
            actualizar.descripcion=book.descripcion
            actualizar.autor      =book.autor
            actualizar.publicacion=book.publicacion
            actualizar.paginas    =book.paginas
            const updatebook = await this.bookRepository.update(id,actualizar)

            if(updatebook.affected==0){
              throw new NotFoundException("No se actualizado el libro");
            }

            return await this.bookRepository.findOne({where:{id_book:id}});

    }

    async deleteBook(id_book: number):Promise<Books> {
     
      const deletebo = await this.bookRepository.findOne({where: {id_book} } );
      if (!deletebo) {
        throw new NotFoundException(`No se encuentra el Libro ${id_book}`);
      }
      
      return this.bookRepository.remove(deletebo);
    }
      
      
      //return `Se ha eliminado el book con el id: ${id} `;
          //await this.bookRepository.remove(id);
       
        
      
         
    

}
