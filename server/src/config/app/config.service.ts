import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IAppConfigService } from './config.interface';

@Injectable()
export class AppConfigService implements IAppConfigService {
  constructor(private readonly configService: ConfigService) {}

  get port(): string {
    return String(this.configService.get('app.port'));
  }

  get backendUrl(): string {
    return String(this.configService.get<string>(`app.backendUrl`));
  }

  get frontendUrl(): string {
    return String(this.configService.get('app.backendUrl'));
  }
}
