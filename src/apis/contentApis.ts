import axios, { AxiosError } from 'axios';
import { IAxiosCustomResponse } from '../interfaces';

export const getPublicContentFromHost = async (filename: string): Promise<IAxiosCustomResponse> => {
  try {
    const origin = window.location.origin;
    const url = `${origin}/markdowns/${filename}.md`;
    const value = await axios.get(url);
    return {
      value,
      error: null
    };
  } catch (e) {
    const error = e as AxiosError;
    return {
      value: null,
      error
    };
  }
};
