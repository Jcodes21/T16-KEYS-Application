// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { FaultReport, FaultStatus } from './faultReport.entity';
// import { Resident } from '../resident/resident.entity';

// @Injectable()
// export class FaultReportService {
//   constructor(
//     @InjectRepository(FaultReport)
//     private readonly faultReportRepository: Repository<FaultReport>,
//     @InjectRepository(Resident)
//     private readonly residentRepository: Repository<Resident>,
//   ) {}

//   // Method to find a resident by their ID
//   async findResidentById(residentId: number): Promise<Resident | null> {
//     const resident = await this.residentRepository.findOne({
//       where: { id: residentId },
//     });
//     if (!resident) {
//       throw new Error('Resident not found');
//     }
//     return resident;
//   }

//   // Method to create a new fault report
//   async createFaultReport(
//     residentId: number,
//     description: string,
//     status: FaultStatus = FaultStatus.PENDING,
//   ): Promise<FaultReport> {
//     const resident = await this.findResidentById(residentId);

//     if (!resident) {
//       throw new Error('Resident not found');
//     }

//     const faultReport = this.faultReportRepository.create({
//       resident,
//       description,
//       status,
//     });

//     return this.faultReportRepository.save(faultReport);
//   }

//   // Method to get a fault report by ID
//   async findFaultReportById(id: number): Promise<FaultReport | null> {
//     return this.faultReportRepository.findOne({
//       where: { id },
//       relations: ['resident'],
//     });
//   }

//   // Method to update a fault report by ID
//   async updateFaultReportStatus(id: number, status: FaultStatus): Promise<FaultReport | null> {
//     const faultReport = await this.findFaultReportById(id);
//     if (!faultReport) {
//       throw new Error('Fault report not found');
//     }
//     faultReport.status = status;
//     return this.faultReportRepository.save(faultReport);
//   }
// }
