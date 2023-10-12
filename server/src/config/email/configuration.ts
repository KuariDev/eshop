import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  host: process.env["MAILER_HOST"],
  port: process.env["MAILER_PORT"],
  login: process.env["MAILER_LOGIN"],
  password: process.env["MAILER_PASSWORD"]
}));
