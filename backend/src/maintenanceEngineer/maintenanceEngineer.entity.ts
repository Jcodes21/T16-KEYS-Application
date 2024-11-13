// src/maintenance-engineer/maintenance-engineer.entity.ts
import { Entity, Column, OneToMany } from 'typeorm';
import { FaultReport } from '../fault-report/fault-report.entity'; // Assuming fault-report.entity.ts exists
import { BaseEntity } from '../shared/base.entity'; // Import BaseEntity

@Entity('maintenance_engineers')
export class MaintenanceEngineer extends BaseEntity {  // Inherit from BaseEntity
  @Column()
  department!: string;

  @Column()
  qualification!: string;

  @Column({ type: 'float', nullable: true })
  years_experience!: number;

  @Column()
  company_name!: string;

  @Column({ nullable: true })
  company_contact!: string;

  @Column({ type: 'float', nullable: true })
  latitude!: number;  // Latitude for geolocation

  @Column({ type: 'float', nullable: true })
  longitude!: number; // Longitude for geolocation

  @OneToMany(() => FaultReport, faultReport => faultReport.engineer) // Assuming one engineer can handle many fault reports
  fault_reports!: FaultReport[];
}
