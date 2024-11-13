// src/maintenance-engineer/maintenance-engineer.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { MaintenanceEngineer } from './maintenance-engineer.entity';
import { calculateDistance } from '../utils/distance.helper';
import { Resident } from '../resident/resident.entity'; // Import Resident entity

@Injectable()
export class MaintenanceEngineerService {
  constructor(
    @InjectRepository(MaintenanceEngineer)
    private readonly maintenanceEngineerRepository: Repository<MaintenanceEngineer>,
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>, // Inject Resident repository
  ) {}

  async findAll(): Promise<MaintenanceEngineer[]> {
    return this.maintenanceEngineerRepository.find();
  }

  async findOne(id: string): Promise<MaintenanceEngineer | null> {
    return this.maintenanceEngineerRepository.findOne(id);
  }

  async update(id: string, updateData: Partial<MaintenanceEngineer>): Promise<MaintenanceEngineer> {
    await this.maintenanceEngineerRepository.update(id, updateData);
    return this.findOne(id); // Return the updated engineer
  }

  // Find engineers within a 2km radius of a resident
  async findNearbyEngineers(residentId: string): Promise<MaintenanceEngineer[]> {
    const resident = await this.residentRepository.findOne(residentId);
    if (!resident || !resident.latitude || !resident.longitude) {
      throw new Error('Resident location not found');
    }

    // Get all available maintenance engineers
    const engineers = await this.maintenanceEngineerRepository.find({
      where: { available: true },
    });

    // Filter engineers within 2km radius
    const nearbyEngineers = engineers.filter((engineer) => {
      const distance = calculateDistance(
        resident.latitude,
        resident.longitude,
        engineer.latitude,
        engineer.longitude,
      );
      return distance <= 2; // 2km radius
    });

    return nearbyEngineers;
  }
}
