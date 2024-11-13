// src/fault-report/fault-report.entity.ts
import { Entity, Column, ManyToOne } from 'typeorm';
import { Resident } from '../resident/resident.entity'; // Assuming Resident is in a separate module
import { BaseEntity } from '../shared/base.entity'; // Import BaseEntity for the id and created_at fields

@Entity('fault_reports')
export class FaultReport extends BaseEntity {  // Inherit from BaseEntity
  @ManyToOne(() => Resident, (resident) => resident.fault_reports)
  resident!: Resident;  // The resident who created the fault report

  @Column('text')
  description!: string;  // Description of the fault

  @Column({
    type: 'enum',
    enum: ['PENDING', 'UNDER_REVIEW', 'NEEDS_REPAIR', 'IN_PROGRESS', 'ESCALATED', 'ON_HOLD', 'CANCELED', 'RESOLVED'],
    default: 'PENDING',
  })
  status!: string;  // The current status of the fault report

