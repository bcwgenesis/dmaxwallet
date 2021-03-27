import axios from 'axios';
import Config from 'react-native-config';

const instance = axios.create({
  baseURL: Config.API_HOST,
  timeout: 60000,
  headers: {Accept: 'application/json', 'Content-Type': 'application/json'},
});

export const post = async (url: string, data: any, token?: string) => {
  try {
    const response = await instance({
      method: 'POST',
      url: url,
      data,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data) {
      return response.data;
    } else {
      throw response;
    }
  } catch (err) {
    // Handle Error Here
    throw err;
  }
};

export const get = async (url: string, token?: string, params?: any) => {
  try {
    const response = await instance({
      method: 'GET',
      url: url,
      params,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.data) {
      return response.data;
    } else {
      throw response;
    }
  } catch (err) {
    // Handle Error Here
    throw err;
  }
};
