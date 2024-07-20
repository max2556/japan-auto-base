import axios, { AxiosError, AxiosInstance, CreateAxiosDefaults } from 'axios';

export const baseURL = `http://${process.env.NEXT_PUBLIC_BASE_URL_IP}:${process.env.NEXT_PUBLIC_BASE_URL_PORT}`;

export const createAxiosInstance = () => {
  const axiosConfiguration = {
    baseURL
  };

  const instance = axios.create(axiosConfiguration);


  return instance;
};

export const api = createAxiosInstance();