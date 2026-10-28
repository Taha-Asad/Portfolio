import { Controller, Get } from '@nestjs/common';
import { MetricsService } from './metrics.service';
import { DashboardOverview, SystemMetric } from '@portfolio/types';

@Controller('metrics')
export class MetricsController {
  constructor(private readonly metricsService: MetricsService) {}

  @Get('overview')
  async getOverview(): Promise<DashboardOverview> {
    return this.metricsService.getDashboardOverview();
  }

  @Get('system')
  async getSystemMetric(): Promise<SystemMetric> {
    return this.metricsService.getSystemMetric();
  }
}
