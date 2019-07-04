import { Auth, IAuthOptions } from './auth';
import { Defaults } from './defaults';
import { Devices } from './devices';
import { Fetch } from './fetch';

export class AxonizeApiClient {
  public defaults = new Defaults();
  public fetch = new Fetch(this);
  public devices = new Devices(this);
  public auth: Auth;

  constructor(credentials?: IAuthOptions) {
    this.auth = new Auth(credentials);
  }
}

export default AxonizeApiClient;
