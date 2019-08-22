import AxonizeApiClient from '..';
import { IGateway } from './types';

export class Gateways {
  /**
   * Gateways Api
   *
   * CRUD for event and protocol gateways
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}
  /**
   * Create a Protocol Gateway
   * @param gateway
   */
  public create(gateway: Pick<IGateway, 'name' | 'manufacturer' | 'type' | 'productId'>): Promise<IGateway> {
    return this.client.request.doFetch(this.getGatewayRoute(), { method: 'POST', data: gateway });
  }

  /**
   * Install a Protocol Gateway
   * Should only be run after creation
   * @param gateway
   */
  public install(gatewayId: Pick<IGateway, 'id'>): Promise<IGateway> {
    return this.client.request.doFetch(this.getODataResource(gatewayId.id)+'/'+'installService', { method: 'POST' });
  }

  /**
   * Delete a Protocol Gateway
   * @param id
   */
  public delete(gatewayId: Pick<IGateway, 'id'>): Promise<undefined> {
    return this.client.request.doFetch(this.getODataResource(gatewayId.id), { method: 'DELETE' });
  }

  /**
   * get Gateway
   */
  public get(gatewayId: Pick<IGateway, 'id'>): Promise<IGateway> {
    return this.client.request.doFetch(this.getODataResource(gatewayId.id), { method: 'GET' });
  }

  private getGatewayRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/gateways`;
  }

  private getODataResource(id: string) {
    return this.getGatewayRoute() + '/'+ id
  }
}
