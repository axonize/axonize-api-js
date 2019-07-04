import fetch, { RequestInit } from 'node-fetch';
import AxonizeApiClient from '.';
import ClientError from './ClientError';
import { IGenericObject } from './types/common';

const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const HEADER_REQUESTED_WITH = 'X-Requested-With';
const HEADER_USER_AGENT = 'User-Agent';
const HEADER_CLIENT_ID = 'ClientId';
const HEADER_CLIENT_SECRET = 'ClientSecret';

interface IFetchGenericOptions extends RequestInit {
  [key: string]: any;
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
    } else if (this.client.auth.getClientID() && this.client.auth.getClientSecret()) {
      headers[HEADER_CLIENT_ID] = this.client.auth.getClientID();
      headers[HEADER_CLIENT_SECRET] = this.client.auth.getClientSecret();
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

    if (response.ok) {
      try {
        const data = await response.json();
        return {
          data,
          response,
        };
      } catch (err) {
        throw err;
      }
    }

    throw new ClientError({
      message: response.statusText,
      statusCode: response.status,
      url,
    });
  };
}
