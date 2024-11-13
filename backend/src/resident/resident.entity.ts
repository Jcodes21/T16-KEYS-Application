// src/resident/resident.entity.ts
import { Entity, Column } from 'typeorm';
import { User } from '../user/user.entity';  // Import User entity

@Entity('residents')
export class Resident extends User {  // Inherit from User entity
  @Column({ type: 'varchar', nullable: true })
  street!: string;

  @Column({ type: 'varchar', nullable: true })
  city!: string;

  @Column({ type: 'varchar', nullable: true })
  state!: string;

  @Column({ type: 'varchar', nullable: true })
  postal_code!: string;

  @Column({ type: 'varchar', nullable: true })
  country!: string;

  @Column({ type: 'float', nullable: true })
  latitude!: number;

  @Column({ type: 'float', nullable: true })
  longitude!: number;
}
