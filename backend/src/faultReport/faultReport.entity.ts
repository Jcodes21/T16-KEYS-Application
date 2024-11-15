// src/fault-report/fault-report.entity.ts
// import { Entity, Column, ManyToOne } from 'typeorm';
// import { Resident } from '../resident/resident.entity';
// import { MaintenanceEngineer } from '../maintenanceEngineer/maintenanceEngineer.entity'; 
// import { BaseEntity } from '../shared/base.entity';

// export enum FaultStatus {
//   PENDING = 'PENDING',
//   UNDER_REVIEW = 'UNDER_REVIEW',
//   NEEDS_REPAIR = 'NEEDS_REPAIR',
//   IN_PROGRESS = 'IN_PROGRESS',
//   ESCALATED = 'ESCALATED',
//   ON_HOLD = 'ON_HOLD',
//   CANCELED = 'CANCELED',
//   RESOLVED = 'RESOLVED',
// }

// @Entity('fault_reports')
// export class FaultReport extends BaseEntity {
//   @ManyToOne(() => Resident, (resident) => resident.faultReport, { nullable: false })
//   resident!: Resident;

//   @ManyToOne(() => MaintenanceEngineer, (engineer) => engineer.fault_reports, { nullable: true })
//   engineer!: MaintenanceEngineer;

//   @Column('text')
//   description!: string;

//   @Column({
//     type: 'enum',
//     enum: FaultStatus,
//     default: FaultStatus.PENDING,
//   })
//   status!: FaultStatus;
// }
