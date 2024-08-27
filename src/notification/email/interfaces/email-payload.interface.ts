import { ISendMailOptions } from '@nestjs-modules/mailer';

export interface EmailPayload extends ISendMailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
