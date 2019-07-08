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
   * Adds a device to a application.
   * @param data The initial device data.
   */
  public addDevice(data: Partial<IDevice>): Promise<IDevice> {
    return this.client.request.doFetch(this.getDevicesRoute(), { method: 'POST', data });
  }

  /**
   * Update devices entity.
   * @param id The device ID.
   * @param data The device properties to update.
   */
  public updateDevice(id: string, data: Partial<IDevice>): Promise<IDevice> {
    return this.client.request.doFetch(this.getDeviceRoute(id), { method: 'PATCH', data });
  }

  /**
   * Generate SAS token for the desired device.
   * @param id The device ID.
   * @param daysTTL Token expiration in days.
   */
  public async generateSASToken(id: string, daysTTL: number = 45): Promise<string> {
    const data = { daysTTL };
    const token = await this.client.request.doFetch(this.getDeviceGenerateSASTokenRoute(id), { method: 'POST', data });
    return token.value;
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
    return `${this.getDevicesRoute()}/${deviceId}`;
  }

  private getDeviceGenerateSASTokenRoute(deviceId: string) {
    return `${this.getDeviceRoute(deviceId)}/generateSASToken`;
  }
}