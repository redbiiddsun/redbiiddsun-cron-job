import { REGULAR_EXPRESSION_URL } from 'src/common/utils/regex-validate';
import { EmailNotificationPayload } from './interface/email-notification-payload.interface';

export class HtmlTemplateService {
  constructor() {}

  public getEmailNotification(params: EmailNotificationPayload): string {
    const validateURL = REGULAR_EXPRESSION_URL.test(params.button.link);

    if (!validateURL) {
      throw new Error('Invalid URL');
    }

    return `
    <!DOCTYPE html>
      <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Email Template</title>
    </head>
    <body>
    <table width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
        <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" border="0">
                <body style="font-family: 'Poppins', Arial, sans-serif">
    <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
            <td align="center" style="padding: 20px;">
                <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                    <!-- Header -->
                    <tr>
                        <td class="header" style="background-color: #345C72; padding: 40px; text-align: center; color: white; font-size: 24px;">
                        ${params.title}            

                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                      ${params.content}            
                        </td>
                    </tr>

                    <!-- Call to action Button -->
                    <tr>
                        <td style="padding: 0px 40px 0px 40px; text-align: center;">
                            <!-- CTA Button -->
                            <table cellspacing="0" cellpadding="0" style="margin: auto;">
                                <tr>
                                    <td align="center" style="background-color: #345C72; padding: 10px 20px; border-radius: 5px;">
                                        <a href="${params.button.link}}" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold;">${params.button.text}</a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                        ${params.footer}
                        </td>
                    </tr>
                    <!-- Footer -->
                    <tr>
                        <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                        Copyright &copy; 2024 | ${params.reference}
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
      </body>
            </table>
        </td>
      </tr>
    </table>
    </body>
    </html>`;
  }
}
