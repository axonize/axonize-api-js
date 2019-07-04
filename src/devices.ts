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

  public async getDevices(): Promise<IDevice[]> {
    const data = await this.client.request.doFetch(this.getDevicesRoute(), { method: 'GET' });
    return data.value;
  }

  public getDevice(id: string): Promise<IDevice> {
    return this.client.request.doFetch(this.getDeviceRoute(id), { method: 'GET' });
  }
}
