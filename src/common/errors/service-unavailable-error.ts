import { ServiceUnavailableException } from '@nestjs/common';

export class ServiceUnavailableError extends ServiceUnavailableException {
  constructor(message: string) {
    super(message, {
      cause: new Error(),
      description: 'SERVICE_UNAVAILABLE',
    });
  }
}
