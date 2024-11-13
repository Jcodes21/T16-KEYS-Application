import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';  // This is the correct import
import { Repository } from 'typeorm';  // Importing from typeorm, as this will be injected through the shared module
import { Booking } from './booking.entity';  // Import the Booking entity
import { User } from '../user/user.entity';  // Import the User entity for referencing

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)  // Inject the repository for the Booking entity
    private readonly bookingRepository: Repository<Booking>,  // This repository will be injected from the SharedOrmModule
  ) {}

  // Create a new booking
  async create(
    date: Date,
    status: string,
    residentId: string,
    tradespersonId: string | null,
    engineerId: string | null
  ): Promise<Booking> {
    const booking = this.bookingRepository.create({
      date,
      status,
      resident: { id: residentId } as User,
      tradesperson: tradespersonId ? { id: tradespersonId } as User : null,
      engineer: engineerId ? { id: engineerId } as User : null,
    });
    return this.bookingRepository.save(booking);  // Save and return the created booking
  }

  // Get all bookings
  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();  // Fetch all bookings from the DB
  }

  // Get a single booking by ID
  async findOne(id: string): Promise<Booking | null> {
    return this.bookingRepository.findOne(id);  // Find a booking by ID
  }

  // Update booking status
  async updateStatus(id: string, status: string): Promise<Booking | null> {
    await this.bookingRepository.update(id, { status });
    return this.findOne(id);  // Return the updated booking
  }

  // Reschedule a booking (update the date and time)
  async rescheduleBooking(id: string, newDate: Date): Promise<Booking | null> {
    await this.bookingRepository.update(id, { date: newDate });
    return this.findOne(id);  // Return the updated booking
  }
}
