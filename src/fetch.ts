import AxonizeApiClient from ".";
import ClientError from "./ClientError";
import { IGenericObject } from "./types/common";
const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const HEADER_REQUESTED_WITH = 'X-Requested-With';
const HEADER_USER_AGENT = 'User-Agent';

interface IFetchGenericOptions extends RequestInit {
  [key: string]: any
}

export class Fetch {

  constructor(private client: AxonizeApiClient) {}

  public getOptions(options: IFetchGenericOptions) {
    const newOptions = { ...options };

    let headers: IGenericObject = {
      [HEADER_REQUESTED_WITH]: 'XMLHttpRequest',
      ...this.client.defaults.getDefaultHeaders(),
    };

    if (this.client.defaults.getToken()) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.client.defaults.getToken()}`;
    }

    if (this.client.defaults.getIncludeCookies()) {
      newOptions.credentials = 'include';
    }

    if (this.client.defaults.getUserAgent()) {
      headers[HEADER_USER_AGENT] = this.client.defaults.getUserAgent();
    }

    if (newOptions.headers) {
      headers = { ...headers, ...newOptions.headers };
    }

    return {
      ...newOptions,
      headers,
    };
  }

  public doFetch = async (url: string, options: IFetchGenericOptions) => {
    const { data } = await this.doFetchWithResponse(url, options);

    return data;
  };

  public doFetchWithResponse = async (url: string, options: IFetchGenericOptions) => {
    const response = await fetch(url, this.getOptions(options));

    let data;
    try {
      data = await response.json();
    } catch (err) {
      throw err;
    }

    if (response.ok) {
      return {
        data,
        response,
      };
    }

    const msg = data.message || '';

    throw new ClientError({
      message: msg,
      statusCode: response.status,
      url,
    });
  };
}