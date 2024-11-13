// src/fault-report/fault-report.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm'; // This is still needed to inject the repository
import { Repository } from 'typeorm';
import { FaultReport } from './fault-report.entity';  // Import FaultReport entity

@Injectable()
export class FaultReportService {
  constructor(
    @InjectRepository(FaultReport)
    private readonly faultReportRepository: Repository<FaultReport>, // Inject the repository here
  ) {}

  // Create a new Fault Report
  async create(description: string, residentId: string): Promise<FaultReport> {
    const newFaultReport = this.faultReportRepository.create({
      description,
      resident: { id: residentId }, // Assume there's a relationship with Resident
      created_at: new Date(),
    });
    return this.faultReportRepository.save(newFaultReport);
  }

  // Find all Fault Reports
  async findAll(): Promise<FaultReport[]> {
    return this.faultReportRepository.find();
  }

  // Find a specific Fault Report by ID
  async findOne(id: string): Promise<FaultReport | null> {
    return this.faultReportRepository.findOne(id);
  }

  // Update the status of a Fault Report
  async updateStatus(id: string, status: string): Promise<FaultReport | null> {
    await this.faultReportRepository.update(id, { status, updated_at: new Date() });
    return this.findOne(id);
  }
}
