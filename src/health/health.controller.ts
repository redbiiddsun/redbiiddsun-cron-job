import { Controller, Get } from '@nestjs/common';
import { HealthResponse, HealthService } from './health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('health')
  getHealth(): HealthResponse {
    return this.healthService.getHealth();
  }
}
