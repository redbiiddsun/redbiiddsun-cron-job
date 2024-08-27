import { Module } from '@nestjs/common';
import { EmailService } from './email/services/email.service';
import { HtmlTemplateService } from './email/templates/html-template';

@Module({
  providers: [EmailService, HtmlTemplateService],
  exports: [EmailService, HtmlTemplateService],
})
export class NotificationModule {}
