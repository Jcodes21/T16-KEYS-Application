// src/maintenance-engineer/maintenance-engineer.controller.ts
// import { Controller, Get, Param, Put, Body } from '@nestjs/common';
// import { MaintenanceEngineerService } from './maintenanceEngineer.service';
// import { MaintenanceEngineer } from './maintenanceEngineer.entity';

// @Controller('maintenance-engineer')
// export class MaintenanceEngineerController {
//   constructor(private readonly maintenanceEngineerService: MaintenanceEngineerService) {}

//   // Get all engineers
//   @Get()
//   findAll(): Promise<MaintenanceEngineer[]> {
//     return this.maintenanceEngineerService.findAll();
//   }

//   // Get an engineer by ID
//   @Get(':id')
//   findOne(@Param('id') id: string): Promise<MaintenanceEngineer | null> {
//     return this.maintenanceEngineerService.findOne(id);
//   }

//   // Update engineer details
//   @Put(':id')
//   async update(
//     @Param('id') id: string,
//     @Body() updateData: Partial<MaintenanceEngineer>
//   ): Promise<MaintenanceEngineer | null> {
//     const updatedEngineer = await this.maintenanceEngineerService.update(id, updateData);
//     if (!updatedEngineer) {
//       throw new Error(`MaintenanceEngineer with ID ${id} not found`);
//     }
//     return updatedEngineer;
//   }

//   // Find engineers within a 2km radius of a resident
//   @Get('nearby/:residentId')
//   async getNearbyEngineers(@Param('residentId') residentId: string) {
//     return this.maintenanceEngineerService.findNearbyEngineers(residentId);
//   }
// }
