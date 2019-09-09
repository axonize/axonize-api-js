import { Alarms } from './alarms/alarms';
import { Applications } from './applications/applications';
import { Auth } from './auth/auth';
import { IAuthOptions } from './auth/types';
import { Defaults } from './defaults/defaults';
import { Devices } from './devices/devices';
import { Gateways } from './gateways/gateways';
import { Groups } from './groups/groups';
import { Locales } from './locales/locales';
import { Products } from './products/products';
import { Request } from './request/request';
import { SchemaDefinitions } from './schemaDefinitions/schemaDefinitions';

export class AxonizeApiClient {
  public defaults = new Defaults();
  public request = new Request(this);
  public devices = new Devices(this);
  public products = new Products(this);
  public alarms = new Alarms(this);
  public locales = new Locales(this);
  public groups = new Groups(this);
  public gateways = new Gateways(this);
  public schemaDefinitions = new SchemaDefinitions(this);
  public applications = new Applications(this);

  public auth: Auth;

  constructor(credentials?: IAuthOptions) {
    this.auth = new Auth(credentials);
  }
}

export default AxonizeApiClient;
