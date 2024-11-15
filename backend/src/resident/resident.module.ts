import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { ResidentController } from './resident.controller';
import { ResidentService } from './resident.service';
import { Resident } from './resident.entity'; // Import Resident entity

@Module({
  imports: [TypeOrmModule.forFeature([Resident])], // Register Resident entity with TypeOrmModule
  controllers: [ResidentController],
  providers: [ResidentService],
  exports: [ResidentService], // Export if needed in other modules
})
export class ResidentModule {}
