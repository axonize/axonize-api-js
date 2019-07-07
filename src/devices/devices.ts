import AxonizeApiClient from '..';
import { IDevice } from './types';

export class Devices {
  /**
   * Devices Api
   * 
   * Manage your Axonize devices inventory.
   * @param client 
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Get the devices according to your permissions.
   * @returns List of devices according to your permissions.
   */
  public async getDevices(): Promise<IDevice[]> {
    const data = await this.client.request.doFetch(this.getDevicesRoute(), { method: 'GET' });
    return data.value;
  }

  /**
   * Returns the desired device according to the ID.
   * @param id The device ID.
   */
  public getDevice(id: string): Promise<IDevice> {
    return this.client.request.doFetch(this.getDeviceRoute(id), { method: 'GET' });
  }

  /**
   * Delete the desired device according to the ID.
   * @param id The device ID.
   */
  public deleteDevice(id: string) {
    return this.client.request.doFetch(this.getDeviceRoute(id), { method: 'DELETE' });
  }

  private getDevicesRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/devices`;
  }

  private getDeviceRoute(deviceId: string) {
    return `${this.client.defaults.getODataBaseRoute()}/devices/${deviceId}`;
  }
}
