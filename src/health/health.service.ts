import { Injectable } from '@nestjs/common';

export interface HealthResponse {
  message: string;
}

@Injectable()
export class HealthService {
  getHealth(): HealthResponse {
    return { message: 'OK' };
  }
}
