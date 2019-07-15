import { AxonizeApiClient } from '..';
import { ILocales, Language, ISupportedLanguage } from './types';

export class Locales {
  /**
   * Locales Api
   *
   * Get Axonize internationalization data.
   * @param client
   */
  constructor(private client: AxonizeApiClient) {}

  /**
   * Returns the desired language keys according to the locale.
   * @param locale The desired language.
   */
  public getLocale(locale: Language): Promise<ILocales> {
    return this.client.request.doFetch(this.getLocaleRoute(locale), { method: 'GET' });
  }

  /**
   * Returns Axonize Supported languages.
   */
  public getSupportedLanguages(): Promise<ISupportedLanguage[]> {
    return this.client.request.doFetch(this.getSupportedLanguagesRoute(), { method: 'GET' });
  }

  private getLocaleBaseRoute() {
    return `${this.client.defaults.getAPIBaseRoute()}/locales`;
  }

  private getLocaleRoute(locale: string) {
    return `${this.getLocaleBaseRoute()}/${locale}`;
  }

  private getSupportedLanguagesRoute() {
    return `${this.getLocaleBaseRoute()}/supportedLanguages`;
  }
}
