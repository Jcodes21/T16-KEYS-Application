// src/tradesperson/tradesperson.module.ts
import { Module } from '@nestjs/common';
import { TradespersonController } from './tradesperson.controller';
import { TradespersonService } from './tradesperson.service';

@Module({
  controllers: [TradespersonController],
  providers: [TradespersonService],
})
export class TradespersonModule {}

