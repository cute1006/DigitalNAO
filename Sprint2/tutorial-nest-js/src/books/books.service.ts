import { Injectable } from '@nestjs/common';
import { BookDto } from './dto/bookDto';
import { UpdateBookDto } from './dto/updateDto';
import { Book } from './book.class';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entities/book.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BooksService {
  constructor(
    //conexion a la tabla book
    @InjectRepository(Books)
    private readonly userRepository: Repository<Books>,
    
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

    readBook(id:number){
         return this.books[id-1];
    }

    async createBook(newBook: BookDto) {
      const books: Books = new Books();
      //referencia entity   //dto
      books.titulo = newBook.titulo
      books.descripcion = newBook.descripcion
      books.autor = newBook.autor
      books.publicacion = newBook.publicacion
      books.paginas = newBook.paginas
      const bookInsert = await this.userRepository.save(books);
      
        return bookInsert;
    }

    updateBook(id : number ,book: UpdateBookDto) {
        console.log(book.id)
        if (book.id != undefined ){
            return book;
        }
        else{
            return 'El id es requerido'
        }
    }

    deleteBook(id :number){
        return `El Libro con el Id : ${id} se ha eliminado con exito`
    }

}
