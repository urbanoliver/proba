import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Parfum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  brand: string;

  @Column()
  price: number;

  @Column()
  quantity: number;

  

}