// src/resident/resident.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Resident } from './resident.entity';
//mport { CreateResidentDto } from './dto/create-resident.dto';
//import { UpdateResidentDto } from './dto/update-resident.dto';

@Injectable()
export class ResidentService {
  constructor(
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>,
  ) {}

  // Create a new resident
  // async create(createResidentDto: CreateResidentDto): Promise<Resident> {
  //   const resident = this.residentRepository.create(createResidentDto);
  //   return this.residentRepository.save(resident);
  // }

  // Find all residents
  // async findAll(): Promise<Resident[]> {
  //   return this.residentRepository.find();
  // }

  // Find one resident by ID
  // async findOne(id: string): Promise<Resident> {
  //   const numericId = parseInt(id, 10); // Convert id to a number

  //   const resident = await this.residentRepository.findOne({ where: { id: numericId } });
  //   if (!resident) {
  //     throw new NotFoundException(`Resident with ID ${id} not found`);
  //   }
  //   return resident;
  // }

  // Update a resident by ID
  // async update(id: string, updateResidentDto: UpdateResidentDto): Promise<Resident> {
  //   const resident = await this.findOne(id);
  //   Object.assign(resident, updateResidentDto);
  //   return this.residentRepository.save(resident);
  // }
}
