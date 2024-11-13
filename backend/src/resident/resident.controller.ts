import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { ResidentService } from './resident.service'; // You will need to implement this service

@Controller('residents')
export class ResidentController {
  constructor(private readonly residentService: ResidentService) {}

  @Post()
  create(@Body() createResidentDto: any) {
    return this.residentService.create(createResidentDto);
  }

  @Get()
  findAll() {
    return this.residentService.findAll();
  } 

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.residentService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateResidentDto: any) {
    return this.residentService.update(id, updateResidentDto);
  }
}
