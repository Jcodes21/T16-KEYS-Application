// src/maintenance-engineer/maintenance-engineer.service.ts
// import { Injectable } from '@nestjs/common';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Repository } from 'typeorm';
// import { MaintenanceEngineer } from './maintenanceEngineer.entity';
// import { calculateDistance } from '../util/distance.helper';
// import { Resident } from '../resident/resident.entity';

// @Injectable()
// export class MaintenanceEngineerService {
//   constructor(
//     @InjectRepository(MaintenanceEngineer)
//     private readonly maintenanceEngineerRepository: Repository<MaintenanceEngineer>,
//     @InjectRepository(Resident)
//     private readonly residentRepository: Repository<Resident>,
//   ) {}

//   async findAll(): Promise<MaintenanceEngineer[]> {
//     return this.maintenanceEngineerRepository.find();
//   }

//   async findOne(id: string): Promise<MaintenanceEngineer | null> {
//     return this.maintenanceEngineerRepository.findOneBy({ id: Number(id) });
//   }

//   async update(id: string, updateData: Partial<MaintenanceEngineer>): Promise<MaintenanceEngineer | null> {
//     await this.maintenanceEngineerRepository.update(Number(id), updateData);
//     return this.findOne(id);
//   }

//   async findNearbyEngineers(residentId: string): Promise<MaintenanceEngineer[]> {
//     const resident = await this.residentRepository.findOneBy({ id: Number(residentId) });
//     if (!resident || resident.latitude === null || resident.longitude === null) {
//       throw new Error('Resident location not found');
//     }

//     const engineers = await this.maintenanceEngineerRepository.find({
//       where: { available: true },
//     });

//     const nearbyEngineers = engineers.filter((engineer) => {
//       const distance = calculateDistance(
//         resident.latitude,
//         resident.longitude,
//         engineer.latitude,
//         engineer.longitude,
//       );
//       return distance <= 2; // 2km radius
//     });

//     return nearbyEngineers;
//   }
// }
