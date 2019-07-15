import { AxonizeApiClient } from '..';
import { ILocales } from './types';

export class Locales {
  /**
   * Locales Api
   *
   * Get Axonize internationalization data.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Returns the desired device according to the ID.
   * @param id The device ID.
   */
  public getLocale(locale: string): Promise<ILocales> {
    return this.client.request.doFetch(this.getLocaleRoute(locale), { method: 'GET' });
  }

  private getLocaleBaseRoute() {
    return `${this.client.defaults.getAPIBaseRoute()}/locales`;
  }

  private getLocaleRoute(locale: string) {
    return `${this.getLocaleBaseRoute()}/${locale}`;
  }
}
