import { Injectable } from '@nestjs/common';
import { ServiceUnavailableError } from 'src/common/errors/service-unavailable-error';
import { EmailService } from 'src/notification/email/services/email.service';
import { HtmlTemplateService } from 'src/notification/email/templates/html-template';

export interface HealthResponse {
  message: string;
}

@Injectable()
export class HealthService {
  constructor(
    private readonly emailService: EmailService,
    private readonly htmlTemplateService: HtmlTemplateService,
  ) {}

  getHealth(): HealthResponse {
    return { message: 'OK' };
  }

  async getEmailHealth(): Promise<HealthResponse> {
    const sendResult = await this.emailService.sendEmail({
      from: 'notification-noreply@redbiiddsun.com',
      to: 'sunphanasorn@gmail.com',
      subject: 'redbiiddsun-cron-job Email Service Health Check',
      html: this.htmlTemplateService.getEmailNotification({
        title: 'redbiiddsun-cron-job Email Service Health Check',
        content: 'This is a health check email from redbiiddsun-cron-job',
        button: {
          text: 'Click here to check the health status',
          link: 'http://localhost:3000/health',
        },
        footer: 'This is a footer',
        reference: 'This is a reference',
      }),
    });

    if (!sendResult) {
      throw new ServiceUnavailableError('Email Service is unavailable');
    }

    return { message: 'ok' };
  }
}
