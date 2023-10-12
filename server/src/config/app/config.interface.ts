export interface IAppConfigService {
  get port(): string;
  get backendUrl(): string;
  get frontendUrl(): string;
}

export const IAppConfigService = Symbol('IAppConfigService');
