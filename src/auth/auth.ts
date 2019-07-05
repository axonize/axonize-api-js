import { IAuthOptions } from './types';

export class Auth {
  constructor(protected credentials: IAuthOptions = {}) {}

  public getClientID() {
    return this.credentials.clientId;
  }

  public setClientID(clientId: string) {
    this.credentials.clientId = clientId;
  }

  public getClientSecret() {
    return this.credentials.clientSecret;
  }

  public setClientSecret(clientSecret: string) {
    this.credentials.clientSecret = clientSecret;
  }
}
