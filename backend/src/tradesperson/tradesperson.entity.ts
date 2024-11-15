// src/tradesperson/tradesperson.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('tradespeople')
export class Tradesperson {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: true })
  trade: string;

  @Column({ type: 'varchar', nullable: true })
  qualifications: string;

  @Column({ type: 'varchar', nullable: true })
  company: string;

  @Column({ type: 'varchar', nullable: true })
  contact: string;

  @Column({ type: 'boolean', default: true })
  available: boolean;

  @Column({ type: 'varchar', nullable: true })
  street: string;

  @Column({ type: 'varchar', nullable: true })
  city: string;

  @Column({ type: 'varchar', nullable: true })
  state: string;

  @Column({ type: 'varchar', nullable: true })
  postal_code: string;

  @Column({ type: 'varchar', nullable: true })
  country: string;

  @Column({ type: 'float', nullable: true })
  latitude: number;

  @Column({ type: 'float', nullable: true })
  longitude: number;

  @CreateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  created_at: Date;

  @UpdateDateColumn({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  updated_at: Date;
}
