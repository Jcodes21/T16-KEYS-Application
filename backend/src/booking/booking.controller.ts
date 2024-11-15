import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { BookingService } from './booking.service';
import { Booking } from './booking.entity';
import { BookingStatus } from './booking.enum'; // Import BookingStatus enum
import { CreateBookingDto } from './dto/create-booking.dto'; // Create a separate DTO file
import { UpdateStatusDto } from './dto/update-status.dto'; // Separate DTO for status update

@Controller('bookings')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  // Create a new booking
  @Post()
  create(@Body() createBookingDto: CreateBookingDto): Promise<Booking> {
    const { date, status, residentId, tradespersonId, engineerId } = createBookingDto;
    const bookingStatus = status as BookingStatus; // Ensure status is treated as BookingStatus
    
    // Convert nullable fields to undefined for optional parameters
    const tradespersonIdSafe = tradespersonId ?? undefined;
    const engineerIdSafe = engineerId ?? undefined;

    return this.bookingService.create(date, bookingStatus, residentId, tradespersonIdSafe, engineerIdSafe);
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
  updateStatus(@Param('id') id: string, @Body() updateStatusDto: UpdateStatusDto): Promise<Booking | null> {
    const bookingStatus = updateStatusDto.status as BookingStatus;
    return this.bookingService.updateStatus(id, bookingStatus);
  }

  // Reschedule a booking (update the date and time)
  @Put(':id/reschedule')
  rescheduleBooking(@Param('id') id: string, @Body('date') newDate: Date): Promise<Booking | null> {
    return this.bookingService.rescheduleBooking(id, newDate);
  }
}
