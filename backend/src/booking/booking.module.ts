import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';  // Importing TypeOrmModule
import { Booking } from './booking.entity';  // Import the Booking entity
import { BookingService } from './booking.service';  // Import the Booking service
import { BookingController } from './booking.controller';  // Import the Booking controller

@Module({
  imports: [TypeOrmModule.forFeature([Booking])],  // Import TypeOrmModule and configure the Booking repository
  providers: [BookingService],  // Register the Booking service
  controllers: [BookingController],  // Register the Booking controller
})
export class BookingModule {}
