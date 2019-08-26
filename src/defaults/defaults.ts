import { IGenericObject } from '../types/common';

export class Defaults {
  protected token: string;
  protected url: string;
  protected userAgent: string | null;
  protected defaultHeaders: IGenericObject;
  protected internalApiKey: string | null;

  constructor() {
    this.token = '';
    const apiUrl = process.env.apiUrl;
    if (apiUrl) {
      this.url = apiUrl;
    } else {
      throw new Error('missing env variable for apiUrl')
    }
    this.userAgent = null;
    this.defaultHeaders = {};
    this.internalApiKey = '';
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

  public getInternalApiKey() {
    return this.internalApiKey;
  }

  public setInternalApiKey(InternalApiKey: string) {
    this.internalApiKey = InternalApiKey;
  }

  public setDefaultHeaders(headers: IGenericObject) {
    this.defaultHeaders = headers;
  }

  public getDefaultHeaders() {
    return this.defaultHeaders;
  }
}
