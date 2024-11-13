import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TradespersonModule } from './tradesperson/tradesperson.module';
import { ResidentModule } from './resident/resident.module';
import { SharedOrmModule } from './shared/sharedOrm/sharedOrm.module';
import { FaultReportModule } from './fault-report/fault-report.module';
import { BookingModule } from './booking/booking.module';
import { NotificationModule } from './notification/notification.module';
import { MaintenanceEngineerModule } from './maintenance-engineer/maintenance-engineer.module'; // Add MaintenanceEngineerModule

@Module({
  imports: [
    UserModule,
    TradespersonModule,
    ResidentModule,
    SharedOrmModule,
    FaultReportModule,
    BookingModule,
    NotificationModule,
    MaintenanceEngineerModule,  // Import the MaintenanceEngineerModule
  ],
})
export class AppModule {}
