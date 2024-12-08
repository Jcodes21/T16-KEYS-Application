import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { User } from '../../user/user.entity';
import { Tradesperson } from '../../tradesperson/tradesperson.entity';
import { Resident } from '../../resident/resident.entity';
import { Booking } from '../../booking/booking.entity';
// import { Notification } from '../../notification/notification.entity';
// import { MaintenanceEngineer } from '../../maintenanceEngineer/maintenanceEngineer.entity';

// Load environment variables
dotenv.config();

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '5432', 10),
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'keys_db',
      entities: [
        User,
        Tradesperson,
        Resident,
        Booking,
        // Notification,
        // MaintenanceEngineer,
      ],
      autoLoadEntities: true, // Automatically load entities for modules
      synchronize: false,     // Disable in production to prevent schema changes
      logging: true,          // Enable logging for development
    }),
    TypeOrmModule.forFeature([
      User,
      Tradesperson,
      Resident,
      Booking,
      // Notification,
      // MaintenanceEngineer,
    ]),
  ],
  exports: [TypeOrmModule], // Make TypeOrmModule available to other modules
})
export class SharedOrmModule {}
