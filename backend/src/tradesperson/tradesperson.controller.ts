// src/tradesperson/tradesperson.controller.ts
import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { TradespersonService } from './tradesperson.service';
import { Tradesperson } from './tradesperson.entity';

@Controller('tradesperson')
export class TradespersonController {
  constructor(private readonly tradespersonService: TradespersonService) {}

  // Create a new tradesperson
  @Post()
  create(@Body() createTradespersonDto: { name: string; trade: string; qualifications: string; company: string; contact: string; available: boolean }) {
    return this.tradespersonService.create(createTradespersonDto.name, createTradespersonDto.trade, createTradespersonDto.qualifications, createTradespersonDto.company, createTradespersonDto.contact, createTradespersonDto.available);
  }

  // Get all tradespeople
  @Get()
  findAll(): Tradesperson[] {
    return this.tradespersonService.findAll();
  }

  // Get tradespeople by trade
  @Get('trade/:trade')
  findByTrade(@Param('trade') trade: string): Tradesperson[] {
    return this.tradespersonService.findByTrade(trade);
  }

  // Get a tradesperson by ID (check if found)
  @Get(':id')
  findOne(@Param('id') id: number): Tradesperson {
    const tradesperson = this.tradespersonService.findOne(id);
    if (!tradesperson) {
      throw new Error('Tradesperson not found');
    }
    return tradesperson;
  }

  // Update tradesperson availability
  @Put(':id')
  updateAvailability(@Param('id') id: number, @Body('available') available: boolean): Tradesperson {
    const tradesperson = this.tradespersonService.updateAvailability(id, available);
    if (!tradesperson) {
      throw new Error('Tradesperson not found');
    }
    return tradesperson;
  }
}
