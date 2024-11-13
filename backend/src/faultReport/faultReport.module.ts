// src/fault-report/fault-report.module.ts
import { Module } from '@nestjs/common';
import { FaultReportService } from './fault-report.service';
import { FaultReportController } from './fault-report.controller';
import { SharedOrmModule } from '../sharedOrm/sharedOrm.module';  // Import shared ORM module

@Module({
  imports: [SharedOrmModule],  // Import the shared ORM module
  providers: [FaultReportService],
  controllers: [FaultReportController],
})
export class FaultReportModule {}
