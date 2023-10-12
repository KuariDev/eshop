import { Module } from '@nestjs/common';
import { PrismaProviderModule } from './database/prisma/provider.module';
import { MailerProviderModule } from './mailer/provider.module';

@Module({
  imports: [PrismaProviderModule, MailerProviderModule],
  exports: [PrismaProviderModule, MailerProviderModule]
})
export class ProvidersModule {}