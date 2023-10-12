import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  port: process.env["APP_PORT"],
  backendUrl: process.env["BACKEND_HOST"],
  frontendUrl: process.env["FRONTEND_HOST"],
}));
