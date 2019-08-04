import AxonizeApiClient from '..';
import { SchemaDefinition } from './types';

export class SchemaDefinitions {
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
  public create(schemaDefinition: SchemaDefinition): Promise<any> {
    return this.client.request.doFetch(this.getSchemaDefinitionsRoute(), { method: 'POST', data: schemaDefinition });
  }

  private getSchemaDefinitionsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/schemaDefinitions`;
  }
}
