// src/sharedOrm/sharedOrm.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'; // Import TypeOrmModule
import { User } from '../../user/user.entity'; // Import User entity
import { Tradesperson } from '../../tradesperson/tradesperson.entity'; // Import Tradesperson entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',  // Change depending on your database (e.g., 'mysql', 'sqlite', etc.)
      url: process.env.DATABASE_URL, // Get database URL from .env
      entities: [User, Tradesperson], // List your entities
      synchronize: true,  // Use migrations in production
    }),
    TypeOrmModule.forFeature([User, Tradesperson]), // Register entities here
  ],
})
export class SharedOrmModule {}
