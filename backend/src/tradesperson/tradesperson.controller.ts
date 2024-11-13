// src/tradesperson/tradesperson.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { TradespersonService } from './tradesperson.service';

@Controller('tradesperson')
export class TradespersonController {
  constructor(private readonly tradespersonService: TradespersonService) {}

  // Get tradespeople within a 2km radius of a resident
  @Get('nearby/:residentId')
  async getNearbyTradespeople(@Param('residentId') residentId: string) {
    return this.tradespersonService.findNearbyTradespeople(residentId);
  }

  // Other existing endpoints like create, findAll, etc.
}
