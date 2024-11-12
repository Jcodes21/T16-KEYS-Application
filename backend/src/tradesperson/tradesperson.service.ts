// src/tradesperson/tradesperson.service.ts
import { Injectable } from '@nestjs/common';
import { Tradesperson } from './tradesperson.entity';

@Injectable()
export class TradespersonService {
  private tradespeople: Tradesperson[] = [];

  // Create a new tradesperson
  create(
    name: string,
    trade: string,
    qualifications: string,
    company: string,
    contact: string,
    available: boolean
  ): Tradesperson {
    const tradesperson = new Tradesperson(name, trade, qualifications, company, contact, available);
    this.tradespeople.push(tradesperson);
    return tradesperson;
  }

  // Find all tradespeople
  findAll(): Tradesperson[] {
    return this.tradespeople;
  }

  // Find tradespeople by trade type
  findByTrade(trade: string): Tradesperson[] {
    return this.tradespeople.filter(t => t.trade === trade);
  }

  // Find a single tradesperson by ID (returning null if not found)
  findOne(id: number): Tradesperson | null {
    const tradesperson = this.tradespeople.find(t => t.id === id);
    return tradesperson || null; // Return null if not found
  }

  // Update a tradesperson's availability (returning null if not found)
  updateAvailability(id: number, available: boolean): Tradesperson | null {
    const tradesperson = this.tradespeople.find(t => t.id === id);
    if (tradesperson) {
      tradesperson.available = available;
      return tradesperson;
    }
    return null; // Return null if not found
  }
}
