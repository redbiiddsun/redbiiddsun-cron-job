export interface EmailNotificationPayload {
  title: string;
  content: string;
  button: ButtonPayload;
  footer: string;
  reference: string;
}

export interface ButtonPayload {
  text: string;
  link: string;
}
