import axios, { CreateAxiosDefaults } from "axios";

export const baseURL =
  process.env.NODE_ENV === "development"
    ? "/api"
    : `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_BASE_URL_IP}/api`;

export const createAxiosInstance = () => {
  const axiosConfiguration: CreateAxiosDefaults = {
    baseURL,
  };

  const instance = axios.create(axiosConfiguration);

  return instance;
};

export const api = createAxiosInstance();
