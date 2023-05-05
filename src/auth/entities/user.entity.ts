import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100 })
  email: string;

  @Column({ length: 100 })
  password: string;

  @Column({ default: false })
  isAdmin: boolean;

  @Column()
  createdAt: Date;

  @Column({ default: null })
  updatedAt: Date;

  constructor() {
    this.createdAt = new Date();
  }
}
