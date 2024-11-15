// src/user/user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([User])], // Register User entity as repository
  providers: [UserService],
  controllers: [UserController],
  exports: [UserService], // Export UserService if needed in other modules
})
export class UserModule {}
