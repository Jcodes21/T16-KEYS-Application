// src/tradesperson/tradesperson.controller.ts
import { Controller, Get, Param } from '@nestjs/common';
import { TradespersonService } from './tradesperson.service';

@Controller('tradesperson')
export class TradespersonController {
  constructor(private readonly tradespersonService: TradespersonService) {}

  // Get tradespeople within a 2km radius of a resident
  @Get('nearby/:residentId')
  async getNearbyTradespeople(@Param('residentId') residentId: string) {
    // Placeholder: Logic to find nearby tradespeople
    // return this.tradespersonService.findNearbyTradespeople(residentId);
    return 'Nearby tradespeople logic commented out for now.';
  }

  // Other existing endpoints like create, findAll, etc.
  // @Post()
  // create(@Body() createTradespersonDto: any) {
  //   return this.tradespersonService.create(createTradespersonDto);
  // }

  // @Get()
  // findAll() {
  //   return this.tradespersonService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.tradespersonService.findOne(id);
  // }

  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateTradespersonDto: any) {
  //   return this.tradespersonService.update(id, updateTradespersonDto);
  // }
}
