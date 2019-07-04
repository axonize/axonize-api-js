import { Auth, IAuthOptions } from './auth';
import { Defaults } from './defaults';
import { Devices } from './devices';
import { Request } from './request';

export class AxonizeApiClient {
  public defaults = new Defaults();
  public request = new Request(this);
  public devices = new Devices(this);
  public auth: Auth;

  constructor(credentials?: IAuthOptions) {
    this.auth = new Auth(credentials);
  }
}

export default AxonizeApiClient;
