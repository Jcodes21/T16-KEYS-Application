import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { TradespersonModule } from './tradesperson/tradesperson.module';
import { ResidentModule } from './resident/resident.module';
import { FaultReportModule } from './fault-report/fault-report.module';
import { BookingModule } from './booking/booking.module';
import { NotificationModule } from './notification/notification.module';
import { SharedOrmModule } from './shared/sharedOrm/sharedOrm.module'; // Import Shared ORM module if needed

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,  // Makes environment variables available globally
      envFilePath: '.env',  // Path to the .env file
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // Import ConfigModule for accessing env vars
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',  // Database type
        url: configService.get<string>('DATABASE_URL'),  // Use DATABASE_URL from .env
        synchronize: true,  // Automatically sync models with DB (for development)
        autoLoadEntities: true,  // Automatically load entities (important for module-based architecture)
      }),
      inject: [ConfigService],  // Inject ConfigService to access environment variables
    }),
    UserModule,
    TradespersonModule,
    ResidentModule,
    FaultReportModule,
    BookingModule,
    NotificationModule,
    SharedOrmModule, // Import shared ORM module if you have one
  ],
})
export class AppModule {}
