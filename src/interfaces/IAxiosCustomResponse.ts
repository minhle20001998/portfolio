import { AxiosError, AxiosResponse } from 'axios';

export interface IAxiosCustomResponse {
  value: AxiosResponse | null;
  error: AxiosError | null;
}
