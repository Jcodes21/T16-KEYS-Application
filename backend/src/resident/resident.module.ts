// src/resident/resident.module.ts
import { Module } from '@nestjs/common';
import { ResidentController } from './resident.controller';
import { ResidentService } from './resident.service';
import { SharedOrmModule } from '../shared/sharedOrm/sharedOrm.module';  // Import SharedOrmModule here

@Module({
  imports: [SharedOrmModule],  // Use the shared module for database access
  controllers: [ResidentController],
  providers: [ResidentService],
})
export class ResidentModule {}
