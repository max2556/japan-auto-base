import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

export const createAxiosInstance = () => {
  const axiosConfiguration = {
    baseURL: 'http://45.92.177.64:8103/'
  };

  const instance = axios.create(axiosConfiguration);


  return instance;
};

export const api = createAxiosInstance();