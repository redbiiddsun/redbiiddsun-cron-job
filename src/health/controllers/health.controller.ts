import { Controller, Get } from '@nestjs/common';
import { HealthResponse, HealthService } from '../services/health.service';

@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Get('')
  getHealth(): HealthResponse {
    return this.healthService.getHealth();
  }

  @Get('email')
  async getEmailHealth() {
    return await this.healthService.getEmailHealth();
  }
}
