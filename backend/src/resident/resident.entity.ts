import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('residents')
export class Resident {
  @PrimaryGeneratedColumn('uuid') // Ensure the UUID is generated for the primary key
  id: string;

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
