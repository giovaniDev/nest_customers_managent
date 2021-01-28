import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column()
    social: string

    @Column()
    cnpj: string

    @Column()
    adress: string

    @Column()
    number: string

    @Column()
    district: string

    @Column()
    city: string

    @Column()
    state: string
}