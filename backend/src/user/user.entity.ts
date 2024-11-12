import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('users') // The name of the table will be 'users'
export class User {
  @PrimaryGeneratedColumn()
  id!: number; // Primary key, automatically generated

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ default: true })
  active: boolean; // User active status, default to true

  constructor(name: string, email: string, password: string, active: boolean = true) {
    this.name = name;
    this.email = email;
    this.password = password;
    this.active = active;
  }
}
