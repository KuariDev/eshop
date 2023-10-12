import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { IEmailConfigService } from './config.interface';

@Injectable()
export class EmailConfigService implements IEmailConfigService {
  constructor(private readonly configService: ConfigService) {}

  get host(): string {
    return String(this.configService.get<string>(`email.host`));
  }

  get port(): string {
    return String(this.configService.get('email.port'));
  }

  get login(): string {
    return String(this.configService.get<string>(`email.login`));
  }

  get password(): string {
    return String(this.configService.get('email.password'));
  }
}
