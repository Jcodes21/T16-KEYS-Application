// src/maintenance-engineer/maintenance-engineer.controller.ts
import { Controller, Get, Param, Put, Body } from '@nestjs/common';
import { MaintenanceEngineerService } from './maintenance-engineer.service';
import { MaintenanceEngineer } from './maintenance-engineer.entity';

@Controller('maintenance-engineer')
export class MaintenanceEngineerController {
  constructor(private readonly maintenanceEngineerService: MaintenanceEngineerService) {}

  // Get all engineers
  @Get()
  findAll(): Promise<MaintenanceEngineer[]> {
    return this.maintenanceEngineerService.findAll();
  }

  // Get an engineer by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<MaintenanceEngineer | null> {
    return this.maintenanceEngineerService.findOne(id);
  }

  // Update engineer details
  @Put(':id')
  update(@Param('id') id: string, @Body() updateData: Partial<MaintenanceEngineer>): Promise<MaintenanceEngineer> {
    return this.maintenanceEngineerService.update(id, updateData);
  }

  // Find engineers within a 2km radius of a resident
  @Get('nearby/:residentId')
  async getNearbyEngineers(@Param('residentId') residentId: string) {
    return this.maintenanceEngineerService.findNearbyEngineers(residentId);
  }
}
