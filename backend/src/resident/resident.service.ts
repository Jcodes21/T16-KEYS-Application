// src/resident/resident.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Resident } from './resident.entity';  // Import the Resident entity

@Injectable()
export class ResidentService {
  constructor(
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>,  // Inject TypeORM Repository
  ) {}

  // Create a new resident
  async create(
    name: string,
    street: string,
    city: string,
    state: string,
    postal_code: string,
    country: string,
    latitude: number,
    longitude: number,
  ): Promise<Resident> {
    const resident = this.residentRepository.create({
      name,
      street,
      city,
      state,
      postal_code,
      country,
      latitude,
      longitude,
    }); // Create a new Resident entity

    return this.residentRepository.save(resident); // Save it to the database
  }

  // Find all residents
  async findAll(): Promise<Resident[]> {
    return this.residentRepository.find();  // Fetch all residents from the DB
  }

  // Find a resident by ID
  async findOne(id: string): Promise<Resident | null> {
    return this.residentRepository.findOne(id);  // Find a resident by ID
  }

  // Update a resident's information (e.g., address)
  async update(id: string, updateData: Partial<Resident>): Promise<Resident | null> {
    await this.residentRepository.update(id, updateData);  // Update resident info
    return this.findOne(id);  // Return the updated resident
  }
}
