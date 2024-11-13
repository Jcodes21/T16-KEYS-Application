import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MaintenanceEngineer } from './maintenance-engineer.entity';
import { MaintenanceEngineerService } from './maintenance-engineer.service';
import { MaintenanceEngineerController } from './maintenance-engineer.controller';

@Module({
  imports: [TypeOrmModule.forFeature([MaintenanceEngineer])],
  providers: [MaintenanceEngineerService],
  controllers: [MaintenanceEngineerController],
})
export class MaintenanceEngineerModule {}
