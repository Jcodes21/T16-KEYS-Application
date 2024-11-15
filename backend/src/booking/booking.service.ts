// src/booking/booking.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';
import { User } from '../user/user.entity';
import { BookingStatus } from './booking.enum';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private readonly bookingRepository: Repository<Booking>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>, // Add user repository to fetch users
  ) {}

  // Method to create a booking
  async create(
    date: Date,
    status: BookingStatus,
    residentId: string,
    tradespersonId?: string,
    engineerId?: string
  ): Promise<Booking> {
    // Fetch the full User entities by id
    const resident = await this.userRepository.findOneBy({ id: parseInt(residentId) });
    if (!resident) throw new NotFoundException(`Resident with ID ${residentId} not found`);

    const tradesperson = tradespersonId
      ? await this.userRepository.findOneBy({ id: parseInt(tradespersonId) })
      : undefined;

    const engineer = engineerId
      ? await this.userRepository.findOneBy({ id: parseInt(engineerId) })
      : undefined;

    const booking = this.bookingRepository.create({
      date,
      status,
      resident,
      tradesperson,
      engineer,
    } as Booking); // Explicitly casting to Booking to satisfy type requirements

    return this.bookingRepository.save(booking);
  }

  // Method to get all bookings
  async findAll(): Promise<Booking[]> {
    return this.bookingRepository.find();
  }

  // Method to find a single booking by ID
  async findOne(id: string): Promise<Booking | null> {
    return this.bookingRepository.findOneBy({ id: parseInt(id) as unknown as string });
  }

  // Method to update the booking status
  async updateStatus(id: string, status: BookingStatus): Promise<Booking | null> {
    await this.bookingRepository.update(parseInt(id), { status });
    return this.findOne(id);
  }

  // Method to reschedule a booking
  async rescheduleBooking(id: string, newDate: Date): Promise<Booking | null> {
    await this.bookingRepository.update(parseInt(id), { date: newDate });
    return this.findOne(id);
  }
}
