import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import configuration from './configuration';
import { IAppConfigService } from './config.interface';
import { AppConfigService } from './config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      validationSchema: Joi.object({
        APP_PORT: Joi.number().required(),
        BACKEND_HOST: Joi.string().required(),
        FRONTEND_HOST: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    {
      provide: IAppConfigService,
      useClass: AppConfigService,
    },
  ],
  exports: [
    {
      provide: IAppConfigService,
      useClass: AppConfigService,
    },
  ],
})
export class AppConfigModule {}
