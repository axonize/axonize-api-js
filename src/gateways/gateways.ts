import AxonizeApiClient from '..';
import { Gateway } from './types';

export class Gateways {
  /**
   * Gateways Api
   *
   * CRUD for event and protocol gateways
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}
  /**
   * Create and Install a Protocol Gateway
   * @param gateway
   */
  public create(gateway: Pick<Gateway, 'name' | 'manufacturer' | 'type'>): Promise<Gateway> {
    return this.client.request.doFetch(this.getGatewayRoute(), { method: 'POST', data: gateway });
  }

  private getGatewayRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/gateways`;
  }
}
