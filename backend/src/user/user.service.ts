// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) // Injecting User repository
    private readonly userRepository: Repository<User>,
  ) {}

  // Create a new user
  async create(userData: Partial<User>): Promise<User> {
    const newUser = this.userRepository.create(userData); // Create a new user entity instance
    return this.userRepository.save(newUser); // Save the new user instance in the database
  }

  // Get user by ID
  async getUserById(id: number): Promise<User | null> {
    return this.userRepository.findOne({ where: { id } }); // Find user by ID
  }
}
