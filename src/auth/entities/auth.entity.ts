import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
@Entity()
export class Auth {
    @PrimaryColumn({ type: 'varchar', nullable: false})
    username: string;
    @Column({ type: 'varchar', nullable: false})
    password: string;
}
