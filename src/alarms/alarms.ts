import AxonizeApiClient from '..';
import { IAlarmInstance } from './types';

export class Alarms {
  /**
   * Alarms Api
   *
   * Manage your Axonize alarms inventory.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Get alarms according to your permissions.
   * @returns List of alarms according to your permissions.
   */
  public async getAlarms(): Promise<IAlarmInstance[]> {
    const data = await this.client.request.doFetch(this.getAlarmsRoute(), { method: 'GET' });
    return data.value;
  }

  /**
   * Returns the desired alarm according to the ID.
   * @param id The alarm ID.
   */
  public async getAlarm(id: string): Promise<IAlarmInstance> {
    const data = await this.client.request.doFetch(this.getAlarmRoute(id), { method: 'GET' });
    return data.value;
  }

  /**
   * Adds a alarm to a application.
   * @param data The initial alarm data.
   */
  public addAlarm(data: Partial<IAlarmInstance>): Promise<IAlarmInstance> {
    return this.client.request.doFetch(this.getAlarmsRoute(), { method: 'POST', data });
  }

  /**
   * Delete the desired alarm according to the ID.
   * @param id The alarm ID.
   */
  public deleteAlarm(id: string) {
    return this.client.request.doFetch(this.getAlarmRoute(id), { method: 'DELETE' });
  }

  /**
   * Update alarm entity.
   * @param id The alarm ID.
   * @param data The alarm properties to update.
   */
  public updateAlarm(id: string, data: Partial<IAlarmInstance>): Promise<IAlarmInstance> {
    return this.client.request.doFetch(this.getAlarmRoute(id), { method: 'PATCH', data });
  }

  private getAlarmsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/alarmInstances`;
  }

  private getAlarmRoute(id: string) {
    return `${this.getAlarmsRoute()}/${id}`;
  }
}
