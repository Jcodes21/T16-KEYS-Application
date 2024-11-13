import { Entity, Column } from 'typeorm';
import { User } from '../user/user.entity'; // Import the User entity for inheritance

@Entity('tradespeople')
export class Tradesperson extends User {
  @Column({ type: 'varchar', nullable: true })
  trade!: string;  // The trade that the tradesperson specializes in (e.g., plumber, electrician)

  @Column({ type: 'varchar', nullable: true })
  qualifications!: string;  // Qualifications of the tradesperson

  @Column({ type: 'varchar', nullable: true })
  company!: string;  // The company the tradesperson works for

  @Column({ type: 'varchar', nullable: true })
  contact!: string;  // The contact information for the tradesperson/company

  @Column({ type: 'boolean', default: true })
  available!: boolean;  // Whether the tradesperson is available for work

  @Column({ type: 'varchar', nullable: true })
  street!: string;  // Street address (nullable)

  @Column({ type: 'varchar', nullable: true })
  city!: string;  // City (nullable)

  @Column({ type: 'varchar', nullable: true })
  state!: string;  // State (nullable)

  @Column({ type: 'varchar', nullable: true })
  postal_code!: string;  // Postal code (nullable)

  @Column({ type: 'varchar', nullable: true })
  country!: string;  // Country (nullable)

  @Column({ type: 'float', nullable: true })
  latitude!: number;  // Latitude (nullable)

  @Column({ type: 'float', nullable: true })
  longitude!: number;  // Longitude (nullable)
}
