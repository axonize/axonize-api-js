import AxonizeApiClient from '..';
import { IGateway, IGatewayResponse } from './types';

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
   * Create a Protocol Gateway and install it.
   * @param gateway
   */
  public createAndInstall(gateway: IGateway): Promise<IGateway> {
    return this.client.request.doFetch(this.getGatewayCreateAndInstallRoute(), { method: 'POST', data:  gateway });
  }

  /**
   * Install a Protocol Gateway
   * Should only be run after creation
   * @param gateway
   */
  public install(gatewayId: string): Promise<IGateway> {
    return this.client.request.doFetch(this.getODataResource(gatewayId) + '/' + 'installService', {
      method: 'POST',
    });
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

  /**
   * get Gateways by Manufacturer
   */
  public getByManufacturer(manufacturer: Pick<IGateway, 'manufacturer'>): Promise<IGatewayResponse> {
    return this.client.request.doFetch(
      this.getGatewayRoute() + `?$filter=contains(manufacturer, '${manufacturer.manufacturer}')`,
      { method: 'GET' },
    );
  }

  /**
   * get Gateways by productId
   */
  public getByProductId(productId: string): Promise<IGatewayResponse> {
    return this.client.request.doFetch(this.getGatewayRoute() + `?$filter=contains(productId, '${productId}')`, {
      method: 'GET',
    });
  }

  private getGatewayRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/gateways`;
  }

  private getGatewayCreateAndInstallRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/gateways/CreateAndInstall`;
  }

  private getODataResource(id: string) {
    return this.getGatewayRoute() + '/' + id;
  }
}
