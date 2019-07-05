import { IGenericObject } from '../types/common';

export class Defaults {
  protected token: string;
  protected url: string;
  protected userAgent: string | null;
  protected defaultHeaders: IGenericObject;

  constructor() {
    this.token = '';
    this.url = 'https://api.axonize.com';
    this.userAgent = null;
    this.defaultHeaders = {};
  }

  public getUrl() {
    return this.url;
  }

  public getODataBaseRoute() {
    return `${this.getUrl()}/odata`;
  }

  public getAPIBaseRoute() {
    return `${this.getUrl()}/api`;
  }

  public setUrl(url: string) {
    this.url = url;
  }

  public setUserAgent(userAgent: string | null) {
    this.userAgent = userAgent;
  }

  public getUserAgent() {
    return this.userAgent;
  }

  public getToken() {
    return this.token;
  }

  public setToken(token: string) {
    this.token = token;
  }

  public setDefaultHeaders(headers: IGenericObject) {
    this.defaultHeaders = headers;
  }

  public getDefaultHeaders() {
    return this.defaultHeaders;
  }
}
