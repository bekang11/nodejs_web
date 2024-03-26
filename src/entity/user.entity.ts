import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class users {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    fullname: string

    @Column()
    username: string

    @Column()
    password: string
}