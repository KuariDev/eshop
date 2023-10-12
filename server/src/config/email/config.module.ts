import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { IEmailConfigService } from './config.interface';
import { EmailConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        MAILER_HOST: Joi.string().required(),
        MAILER_PORT: Joi.number().required(),
        MAILER_LOGIN: Joi.string().required(),
        MAILER_PASSWORD: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: IEmailConfigService,
      useClass: EmailConfigService,
    },
  ],
  exports: [
    {
      provide: IEmailConfigService,
      useClass: EmailConfigService,
    },
  ],
})
export class EmailConfigModule {}
