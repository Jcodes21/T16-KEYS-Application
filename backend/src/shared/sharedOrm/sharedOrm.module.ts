import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../user/user.entity';
import { Tradesperson } from '../../tradesperson/tradesperson.entity';
import { Resident } from '../../resident/resident.entity';
import { Booking } from '../../booking/booking.entity';
//import { Notification } from '../../notification/notification.entity';
//import { MaintenanceEngineer } from '../../maintenanceEngineer/maintenanceEngineer.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',           // replace with actual host if different
      port: 5432,                  // default PostgreSQL port
      username: 'postgres',        // your database username
      password: '',                // your database password
      database: 'keys_db',         // your database name
      entities: [
        User,
        Tradesperson,
        Resident,
        Booking,
        //Notification,
        //MaintenanceEngineer,
      ],
      synchronize: false,           // disable this in production
      logging: true,
    }),
    TypeOrmModule.forFeature([
      User,
      Tradesperson,
      Resident,
      Booking,
      //Notification,
     // MaintenanceEngineer,
    ]),
  ],
  exports: [TypeOrmModule],        // Export TypeOrmModule for usage in other modules
})
export class SharedOrmModule {}
