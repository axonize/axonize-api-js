import axios, { AxiosRequestConfig } from 'axios';
import AxonizeApiClient from '.';
import ClientError from './ClientError';
import { IGenericObject } from './types/common';

const HEADER_AUTH = 'Authorization';
const HEADER_BEARER = 'BEARER';
const HEADER_REQUESTED_WITH = 'X-Requested-With';
const HEADER_USER_AGENT = 'User-Agent';
const HEADER_CLIENT_ID = 'ClientId';
const HEADER_CLIENT_SECRET = 'ClientSecret';

export class Request {
  constructor(private client: AxonizeApiClient) {}

  public getOptions(options: AxiosRequestConfig) {
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
      newOptions.withCredentials = true;
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

  public doFetch = async (url: string, options: AxiosRequestConfig) => {
    try {
      const response = await axios(url, this.getOptions(options));
      return response.data;
    } catch (error) {
      throw new ClientError({
        message: error.message,
        statusCode: error.response && error.response.status,
        url,
      });
    }
  };
}
