// src/user/user.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get user by ID
  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    const numericId = parseInt(id, 10); // Convert id to a number
    return this.userService.getUserById(numericId); // Pass as a number
  }
}
