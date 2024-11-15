// src/booking/booking.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingService } from './booking.service';
import { BookingController } from './booking.controller';
import { Booking } from './booking.entity';
import { User } from '../user/user.entity'; // Import User entity

@Module({
  imports: [
    TypeOrmModule.forFeature([Booking, User]) // Register Booking and User repositories
  ],
  providers: [BookingService],
  controllers: [BookingController],
})
export class BookingModule {}
