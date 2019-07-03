import { Defaults } from './defaults';
import { Devices } from './devices';
import { Fetch } from './fetch';

export default class AxonizeApiClient {
  public defaults = new Defaults();
  public fetch = new Fetch(this);
  public devices = new Devices(this);
}
