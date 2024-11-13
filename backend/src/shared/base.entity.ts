import { PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id!: string;  // UUID as the primary key for every entity that extends BaseEntity

  @CreateDateColumn({ type: 'timestamp' })
  created_at!: Date;  // Timestamp of when the entity was created

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at!: Date;  // Timestamp of when the entity was last updated
}