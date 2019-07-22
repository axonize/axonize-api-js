import AxonizeApiClient from '..';
import { IGroup } from './types';

export class Groups {
  /**
   * Groups Api
   *
   * Manage your Axonize groups inventory.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Get the groups according to your permissions.
   * @returns List of groups according to your permissions.
   */
  public async getGroups(): Promise<IGroup[]> {
    const data = await this.client.request.doFetch(this.getGroupsRoute(), { method: 'GET' });
    return data.value;
  }

  /**
   * Returns the desired Group according to the ID.
   * @param id The group ID.
   */
  public async getGroup(id: string): Promise<IGroup> {
    const data = await this.client.request.doFetch(this.getGroupRoute(id), { method: 'GET' });
    return data.value;
  }

  /**
   * Adds a group to a application.
   * @param data The initial group data.
   */
  public addGroup(data: Partial<IGroup>): Promise<IGroup> {
    return this.client.request.doFetch(this.getGroupsRoute(), { method: 'POST', data });
  }

  /**
   * Delete the desired group according to the ID.
   * @param id The group ID.
   */
  public deleteGroup(id: string) {
    return this.client.request.doFetch(this.getGroupRoute(id), { method: 'DELETE' });
  }

  /**
   * Update group entity.
   * @param id The group ID.
   * @param data The group properties to update.
   */
  public updateGroup(id: string, data: Partial<IGroup>): Promise<IGroup> {
    return this.client.request.doFetch(this.getGroupRoute(id), { method: 'PATCH', data });
  }

  private getGroupsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/groups`;
  }

  private getGroupRoute(id: string) {
    return `${this.getGroupsRoute()}/${id}`;
  }
}
