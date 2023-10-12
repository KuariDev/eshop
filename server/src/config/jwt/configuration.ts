import { registerAs } from '@nestjs/config';

export default registerAs('jwt', () => ({
  access: process.env["JWT_ACCESS_SECRET"],
  accessTTL: 1000 * 60 * 30,
  refresh: process.env["JWT_REFRESH_SECRET"],
  refreshTTL: 1000 * 60 * 60 * 24 * 3
}));
