import { GenericObject } from "./types/common";

export class Defaults {
  protected token: string;
  protected url: string;
  protected userAgent: string | null;
  protected defaultHeaders: { [s: string]: string };
  protected includeCookies: boolean;

  constructor() {
    this.token = '';
    this.url = 'https://api.axonize.com';
    this.userAgent = null;
    this.defaultHeaders = {};
    this.includeCookies = true;
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

  public setIncludeCookies(include: boolean) {
    this.includeCookies = include;
  }

  public getIncludeCookies() {
    return this.includeCookies;
  }

  public setDefaultHeaders(headers: GenericObject) {
    this.defaultHeaders = headers;
  }

  public getDefaultHeaders() {
    return this.defaultHeaders;
  }
}