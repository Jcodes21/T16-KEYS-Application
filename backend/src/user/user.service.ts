// src/user/user.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getTestMessage() {
    return { message: 'User service is working!' };
  }
}
