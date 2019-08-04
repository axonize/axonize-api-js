import AxonizeApiClient from '..';
import { GatewayCreationRequest } from './types';

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
   * @param data configuration data
   */
  public createAndInstallGateway(gatewayCreationRequest: GatewayCreationRequest): Promise<any> {
    return this.client.request.doFetch(this.createAndInstallGatewayRoute(), { method: 'POST', data: gatewayCreationRequest });
  }

  private getGatewayRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/gateways`;
  }

  private createAndInstallGatewayRoute() {
    return `${this.getGatewayRoute()}/CreateAndInstall`;
  }
}
