import axios, { CreateAxiosDefaults } from "axios";

export const baseURL = '/api';

export const createAxiosInstance = () => {
  const axiosConfiguration: CreateAxiosDefaults = {
    baseURL,
  };

  const instance = axios.create(axiosConfiguration);

  return instance;
};

export const api = createAxiosInstance();
