import { Alarms } from './alarms/alarms';
import { Auth } from './auth/auth';
import { IAuthOptions } from './auth/types';
import { Defaults } from './defaults/defaults';
import { Devices } from './devices/devices';
import { Groups } from './groups/groups';
import { Locales } from './locales/locales';
import { Products } from './products/products';
import { Request } from './request/request';

export class AxonizeApiClient {
  public defaults = new Defaults();
  public request = new Request(this);
  public devices = new Devices(this);
  public products = new Products(this);
  public alarms = new Alarms(this);
  public locales = new Locales(this);
  public groups = new Groups(this);
  public auth: Auth;

  constructor(credentials?: IAuthOptions) {
    this.auth = new Auth(credentials);
  }
}

export default AxonizeApiClient;
