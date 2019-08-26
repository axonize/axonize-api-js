import AxonizeApiClient from '..';
import { ISchemaDefinition, ISchemaDefinitionCreationResponse } from './types';

export class SchemaDefinitions {
  /**
   * Gateways Api
   *
   * CRUD for event and protocol gateways
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}
  /**
   * Create a Schema Definition
   * @param data configuration data
   */
  public create(schemaDefinition: ISchemaDefinition): Promise<ISchemaDefinitionCreationResponse> {
    return this.client.request.doFetch(this.getSchemaDefinitionsRoute(), { method: 'POST', data: schemaDefinition });
  }

    /**
   * Delete a Schema Definition
   * @param data configuration data
   */
  public delete(schemaDefinitionId: string): Promise<any> {
    return this.client.request.doFetch(this.odataRoute(schemaDefinitionId), { method: 'DELETE'});
  }

    /**
   * Update a schema definition
   * @param data configuration data
   */
  public update(schemaDefinitionId: Pick<ISchemaDefinitionCreationResponse, 'id'>, schemaDefinition: Partial<ISchemaDefinition>): Promise<ISchemaDefinitionCreationResponse> {
    return this.client.request.doFetch(this.getSchemaDefinitionsRoute() + '/' + schemaDefinitionId.id, { method: 'PATCH', data: schemaDefinition });
  }

  /**
   * parseSchemaWithEvent
   */
  public parseSchemaWithEvent(data: {deviceId: string, payload: string, sendToHub: boolean}): Promise<{value: string}> {
    return this.client.request.doFetch(this.getSchemaDefinitionsRoute() + '/Parse', { method: 'POST', data});
  }

  private getSchemaDefinitionsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/schemaDefinitions`;
  }

  private odataRoute(id: string) {
    return this.getSchemaDefinitionsRoute()+ '/' + id;
  }
}
