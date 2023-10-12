import { Module } from '@nestjs/common';
import { JwtConfigModule } from '@config/jwt/config.module';
import { EmailConfigModule } from '@config/email/config.module';
import { AppConfigModule } from '@config/app/config.module';

@Module({
  imports: [ JwtConfigModule, EmailConfigModule, AppConfigModule ],
  exports: [ JwtConfigModule, EmailConfigModule, AppConfigModule ]
})
export class ConfigModule {}