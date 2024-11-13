import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../shared/base.entity'; // Import BaseEntity

export enum UserRole {
  RESIDENT = 'RESIDENT',
  TRADESPERSON = 'TRADESPERSON',
  MAINTENANCE_ENGINEER = 'MAINTENANCE_ENGINEER',
}

@Entity('users')
export class User extends BaseEntity {  // Inherit from BaseEntity
  @Column()
  first_name!: string;  // First name of the user

  @Column()
  last_name!: string;  // Last name of the user

  @Column()
  email!: string;  // Email of the user

  @Column({ type: 'enum', enum: UserRole, default: UserRole.RESIDENT })
  role!: UserRole;  // Role of the user (Resident, Tradesperson, or Maintenance Engineer)

  @Column({ default: true })
  active!: boolean;  // Whether the user is active or not
}
