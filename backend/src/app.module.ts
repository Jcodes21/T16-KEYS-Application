import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { TradespersonModule } from './tradesperson/tradesperson.module';
import { ResidentModule } from './resident/resident.module';
import { SharedOrmModule } from './shared/sharedOrm/sharedOrm.module';
import { BookingModule } from './booking/booking.module';
import { AppController } from './app.controller'; // Import the AppController
//import { NotificationModule } from './notification/notification.module';
//import { MaintenanceEngineerModule } from './maintenanceEngineer/maintenanceEngineer.module'; // Add MaintenanceEngineerModule
//import { FaultReportModule } from './faultReport/faultReport.module';

@Module({
  controllers: [ AppController],
  imports: [
    UserModule,
    TradespersonModule,
    ResidentModule,
    SharedOrmModule,
    //FaultReportModule,
    BookingModule,
    //NotificationModule,
    //MaintenanceEngineerModule,  // Import the MaintenanceEngineerModule
  ],
})
export class AppModule {}
