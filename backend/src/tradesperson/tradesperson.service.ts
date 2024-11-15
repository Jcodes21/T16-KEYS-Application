// src/tradesperson/tradesperson.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tradesperson } from './tradesperson.entity';
import { Resident } from '../resident/resident.entity'; // Import Resident entity
import { calculateDistance } from '../util/distance.helper'; // Helper function

@Injectable()
export class TradespersonService {
  constructor(
    @InjectRepository(Tradesperson)
    private readonly tradespersonRepository: Repository<Tradesperson>,
    @InjectRepository(Resident)
    private readonly residentRepository: Repository<Resident>, // Inject Resident repository
  ) {}

  // Find tradespeople within a 2km radius of a resident
  /*
  async findNearbyTradespeople(residentId: string): Promise<Tradesperson[]> {
    // Convert residentId to a number
    const numericResidentId = parseInt(residentId, 10);

    const resident = await this.residentRepository.findOne({
      where: { id: numericResidentId },
    });
    if (!resident || !resident.latitude || !resident.longitude) {
      throw new Error('Resident location not found');
    }

    // Get all available tradespeople
    const tradespeople = await this.tradespersonRepository.find({
      where: { available: true },
    });

    // Filter tradespeople within 2km radius
    const nearbyTradespeople = tradespeople.filter((tradesperson) => {
      const distance = calculateDistance(
        resident.latitude,
        resident.longitude,
        tradesperson.latitude,
        tradesperson.longitude,
      );
      return distance <= 2; // 2km radius
    });

    return nearbyTradespeople;
  }
  */

  // Other existing methods like create, findAll, etc.
}
