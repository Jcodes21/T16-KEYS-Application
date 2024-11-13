import { Controller, Get, Post, Body, Param, Put } from '@nestjs/common';
import { FaultReportService } from './fault-report.service';
import { FaultReport } from './fault-report.entity';  // Import FaultReport entity

@Controller('fault-reports')  // Define the route path
export class FaultReportController {
  constructor(private readonly faultReportService: FaultReportService) {}

  // Create a new Fault Report
  @Post()
  async create(
    @Body() createFaultReportDto: { description: string; residentId: string }
  ): Promise<FaultReport> {
    return this.faultReportService.create(createFaultReportDto.description, createFaultReportDto.residentId);
  }

  // Get all Fault Reports
  @Get()
  async findAll(): Promise<FaultReport[]> {
    return this.faultReportService.findAll();
  }

  // Get a specific Fault Report by ID
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FaultReport | null> {
    return this.faultReportService.findOne(id);
  }

  // Update the status of a Fault Report
  @Put(':id')
  async updateStatus(
    @Param('id') id: string,
    @Body('status') status: string
  ): Promise<FaultReport | null> {
    return this.faultReportService.updateStatus(id, status);
  }
}
