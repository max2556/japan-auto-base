import axios from "axios";

export const baseURL = `${process.env.NEXT_PUBLIC_PROTOCOL}://${process.env.NEXT_PUBLIC_BASE_URL_IP}:${process.env.NEXT_PUBLIC_BASE_URL_PORT}/api`;

export const createAxiosInstance = () => {
  const axiosConfiguration = {
    baseURL,
  };

  const instance = axios.create(axiosConfiguration);

  return instance;
};

export const api = createAxiosInstance();
