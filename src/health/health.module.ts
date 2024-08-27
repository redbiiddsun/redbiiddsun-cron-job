import { Module } from '@nestjs/common';
import { HealthService } from './services/health.service';
import { HealthController } from './controllers/health.controller';
import { NotificationModule } from 'src/notification/notification.module';

@Module({
  imports: [NotificationModule],
  controllers: [HealthController],
  providers: [HealthService],
})
export class HealthModule {}
