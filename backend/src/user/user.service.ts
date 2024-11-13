import { Injectable } from '@nestjs/common';

// Mock User data
let users = [];

@Injectable()
export class UserService {
  // Create a new user
  create(userData: { first_name: string; last_name: string; email: string; role: string }) {
    const newUser = { id: Date.now().toString(), ...userData };
    users.push(newUser);
    return newUser;
  }

  // Get user by ID
  getUserById(id: string) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  getTestMessage() {
    return { message: 'User service is working!' };
  }
}
