import axios, { AxiosRequestConfig } from 'axios';
import AxonizeApiClient from '..';
import ClientError from '../ClientError';
import { IGenericObject } from '../types/common';
import { get } from '../utils/get';
import {
  HEADER_AUTH,
  HEADER_BEARER,
  HEADER_CLIENT_ID,
  HEADER_CLIENT_SECRET,
  HEADER_INTERNAL_API_KEY,
  HEADER_PREFER,
  HEADER_REQUESTED_WITH,
  HEADER_USER_AGENT,
} from './constants';

export class Request {
  constructor(private client: AxonizeApiClient) {}

  public getOptions(options: AxiosRequestConfig) {
    const newOptions = { ...options };

    let headers: IGenericObject = {
      [HEADER_REQUESTED_WITH]: 'XMLHttpRequest',
      [HEADER_PREFER]: 'return=representation',
      ...this.client.defaults.getDefaultHeaders(),
    };

    if (this.client.defaults.getToken()) {
      headers[HEADER_AUTH] = `${HEADER_BEARER} ${this.client.defaults.getToken()}`;
    } else if (this.client.auth.getClientID() && this.client.auth.getClientSecret()) {
      headers[HEADER_CLIENT_ID] = this.client.auth.getClientID();
      headers[HEADER_CLIENT_SECRET] = this.client.auth.getClientSecret();
    }

    if (this.client.defaults.getInternalApiKey()) {
      headers[HEADER_INTERNAL_API_KEY] = this.client.defaults.getInternalApiKey()
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
        message: get(error, ['response', 'data', 'error', 'message'], error.message),
        statusCode: error.response && error.response.status,
        url,
      });
    }
  };
}
