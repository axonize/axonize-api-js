import AxonizeApiClient from '..';
import { IProduct } from './types';

export class Products {
  /**
   * Products Api
   *
   * Manage your Axonize products inventory.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Get the products according to your permissions.
   * @returns List of products according to your permissions.
   */
  public async getProducts(): Promise<IProduct[]> {
    const data = await this.client.request.doFetch(this.getProductsRoute(), { method: 'GET' });
    return data.value;
  }

  /**
   * Returns the desired product according to the ID.
   * @param id The product ID.
   */
  public async getProduct(id: string): Promise<IProduct> {
    const data = await this.client.request.doFetch(this.getProductRoute(id), { method: 'GET' });
    return data.value;
  }

  /**
   * Adds a product to a application.
   * @param data The initial product data.
   */
  public addProduct(data: Partial<IProduct>): Promise<IProduct> {
    return this.client.request.doFetch(this.getProductsRoute(), { method: 'POST', data });
  }

  /**
   * Delete the desired product according to the ID.
   * @param id The product ID.
   */
  public deleteProduct(id: string) {
    return this.client.request.doFetch(this.getProductRoute(id), { method: 'DELETE' });
  }

  /**
   * Update product entity.
   * @param id The product ID.
   * @param data The product properties to update.
   */
  public updateProduct(id: string, data: Partial<IProduct>): Promise<IProduct> {
    return this.client.request.doFetch(this.getProductRoute(id), { method: 'PATCH', data });
  }

  private getProductsRoute() {
    return `${this.client.defaults.getODataBaseRoute()}/products`;
  }

  private getProductRoute(id: string) {
    return `${this.getProductsRoute()}/${id}`;
  }
}
