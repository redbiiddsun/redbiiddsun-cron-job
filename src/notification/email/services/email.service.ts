import { MailerService } from '@nestjs-modules/mailer';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EmailPayload } from '../interfaces/email-payload.interface';

@Injectable()
export class EmailService {
  constructor(private readonly nodeMailerService: MailerService) {}

  async sendEmail(params: EmailPayload): Promise<boolean> {
    try {
      await this.nodeMailerService.sendMail(params);

      return true;
    } catch (error) {
      throw new HttpException(
        'Service Unavailable',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
  }
}
