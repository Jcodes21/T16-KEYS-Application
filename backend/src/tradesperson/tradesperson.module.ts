// src/tradesperson/tradesperson.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TradespersonController } from './tradesperson.controller';
import { TradespersonService } from './tradesperson.service';
import { Tradesperson } from './tradesperson.entity'; // Import the Tradesperson entity
import { Resident } from '../resident/resident.entity'; // Import the Resident entity

@Module({
  imports: [TypeOrmModule.forFeature([Tradesperson, Resident])], // Register entities here
  controllers: [TradespersonController],
  providers: [TradespersonService],
  exports: [TradespersonService],
})
export class TradespersonModule {}
