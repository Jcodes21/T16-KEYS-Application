import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Create a new booking
  @Post()
  create(@Body() createBookingDto: { date: Date; status: string; residentId: string; tradespersonId: string | null; engineerId: string | null }) {
    return this.bookingService.create(createBookingDto.date, createBookingDto.status, createBookingDto.residentId, createBookingDto.tradespersonId, createBookingDto.engineerId);
  }

  // Get all bookings
  @Get()
  findAll(): Promise<Booking[]> {
    return this.bookingService.findAll();
  }

  // Get a booking by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Booking | null> {
    return this.bookingService.findOne(id);
  }

  // Update the status of a booking (e.g., completed, canceled)
  @Put(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string): Promise<Booking | null> {
    return this.bookingService.updateStatus(id, status);
  }

  // Reschedule a booking (update the date and time)
  @Put(':id/reschedule')
  rescheduleBooking(@Param('id') id: string, @Body('date') newDate: Date): Promise<Booking | null> {
    return this.bookingService.rescheduleBooking(id, newDate);
  }
}
