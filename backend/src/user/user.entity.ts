import { Entity, Column, OneToMany, BaseEntity, PrimaryGeneratedColumn } from 'typeorm';
//import { Notification } from '../notification/notification.entity';

export enum UserRole {
  RESIDENT = 'RESIDENT',
  TRADESPERSON = 'TRADESPERSON',
  MAINTENANCE_ENGINEER = 'MAINTENANCE_ENGINEER',
}

@Entity('users')
export class User extends BaseEntity {
  @PrimaryGeneratedColumn() // Automatically generates a unique identifier
  id!: number;

  @Column()
  first_name!: string;

  @Column()
  last_name!: string;

  @Column({ unique: true })
  email!: string;

  @Column({ type: 'enum', enum: UserRole, default: UserRole.RESIDENT })
  role!: UserRole;

  @Column({ default: true })
  active!: boolean;

  //@OneToMany(() => Notification, (notification) => notification.user, {
    //cascade: true, // Automatically saves related notifications
  }
//  notifications!: Notification[];

