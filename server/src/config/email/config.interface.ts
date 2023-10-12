export interface IEmailConfigService {
  get host(): string;
  get port(): string;
  get login(): string;
  get password(): string;
}

export const IEmailConfigService = Symbol('IEmailConfigService');
