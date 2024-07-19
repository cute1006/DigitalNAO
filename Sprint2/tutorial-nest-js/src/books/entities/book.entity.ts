import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
@Entity()
export class Books {
    @PrimaryGeneratedColumn()
    id_book: number;
    @Column({ type: 'varchar', nullable: false})
    titulo: string;
    @Column({ type: 'varchar', nullable: false})
    descripcion: string;
    @Column({ type: 'varchar', nullable: false})
    autor: string;
    @Column({ type: 'varchar', nullable: false})
    publicacion: string;
    @Column({ type: 'varchar', nullable: false})
    paginas: string;

}