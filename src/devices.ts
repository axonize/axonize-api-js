import AxonizeApiClient from '.';
import { IDevice } from './types/devices';

export class Devices {
  constructor(private client: AxonizeApiClient) {}

  public getDevicesRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/devices`;
  }

  public getDeviceRoute(deviceId: string) {
    return `${this.client.defaults.getODataBaseRoute()}/devices/${deviceId}`;
  }

  public getDevices(): Promise<IDevice[]> {
    return this.client.fetch.doFetch(this.getDevicesRoute(), { method: 'GET' });
  }

  public getDevice(id: string): Promise<IDevice> {
    return this.client.fetch.doFetch(this.getDeviceRoute(id), { method: 'GET' });
  }
}
