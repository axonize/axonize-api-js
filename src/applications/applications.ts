import AxonizeApiClient from '..';
import { IApplication } from './types';

export class Applications {
  /**
   * Applications Api
   *
   * Manage your Axonize applications inventory.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Get the applications according to your permissions.
   * @returns List of applications according to your permissions.
   */
  public async getApplications(): Promise<IApplication[]> {
    const { value } = await this.client.request.doFetch(this.getApplicationsRoute(), { method: 'GET' });
    return value;
  }

  /**
   * Returns the desired application according to the ID.
   * @param id The application ID.
   */
  public getApplication(id: string): Promise<IApplication> {
    return this.client.request.doFetch(this.getApplicationRoute(id), { method: 'GET' });
  }

  /**
   * Adds application to a tenant.
   * @param data The initial application data.
   */
  public addApplication(data: Partial<IApplication>): Promise<IApplication> {
    return this.client.request.doFetch(this.getApplicationsRoute(), { method: 'POST', data });
  }

  /**
   * Update application entity.
   * @param id The application ID.
   * @param data The application properties to update.
   */
  public updateApplication(id: string, data: Partial<IApplication>): Promise<IApplication> {
    return this.client.request.doFetch(this.getApplicationRoute(id), { method: 'PATCH', data });
  }

  /**
   * Generate SAS token for the desired application.
   * @param id The application ID.
   */
  public async getAppSecret(id: string): Promise<string> {
    const { value } =  await this.client.request.doFetch(this.getApplicationAppSecret(id), { method: 'GET' });
    return value;
  }

  /**
   * Delete the desired application according to the ID.
   * @param id The application ID.
   */
  public deleteApplication(id: string) {
    return this.client.request.doFetch(this.getApplicationRoute(id), { method: 'DELETE' });
  }

  private getApplicationsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/applications`;
  }

  private getApplicationRoute(applicationId: string) {
    return `${this.getApplicationsRoute()}/${applicationId}`;
  }

  private getApplicationAppSecret(applicationId: string) {
    return `${this.getApplicationRoute(applicationId)}/getAppSecret`;
  }
}
