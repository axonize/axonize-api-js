import { Auth } from './auth/auth';
import { IAuthOptions } from './auth/types';
import { Defaults } from './defaults/defaults';
import { Devices } from './devices/devices';
import { Products } from './products/products';
import { Request } from './request/request';

export class AxonizeApiClient {
  public defaults = new Defaults();
  public request = new Request(this);
  public devices = new Devices(this);
  public products = new Products(this);
  public auth: Auth;

  constructor(credentials?: IAuthOptions) {
    this.auth = new Auth(credentials);
  }
}

export default AxonizeApiClient;
