// import { Entity, Column, OneToMany, PrimaryGeneratedColumn, BaseEntity } from 'typeorm';
// import { FaultReport } from '../faultReport/faultReport.entity';

// @Entity('maintenance_engineers')
// export class MaintenanceEngineer extends BaseEntity {
//   @PrimaryGeneratedColumn()
//   id!: number;

//   @Column()
//   department!: string;

//   @Column()
//   qualification!: string;

//   @Column({ type: 'float', nullable: true })
//   years_experience!: number;

//   @Column()
//   company_name!: string;

//   @Column({ nullable: true })
//   company_contact!: string;

//   @Column({ type: 'float', nullable: true })
//   latitude!: number;

//   @Column({ type: 'float', nullable: true })
//   longitude!: number;

//   @Column({ type: 'boolean', default: true })
//   available!: boolean;

//   @OneToMany(() => FaultReport, faultReport => faultReport.engineer, { cascade: true })
//   fault_reports!: FaultReport[];
// }
