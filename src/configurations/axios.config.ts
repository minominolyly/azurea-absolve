import { AxiosRequestConfig } from "axios";

const AxiosConfig = <D>(
  config?: AxiosRequestConfig<D>
): AxiosRequestConfig<D> => {
  const baseConfig: AxiosRequestConfig<D> = {
    timeout: 10000,
    baseURL:
      process.env.NODE_ENV === "production"
        ? "https://minominolyly.github.io/azurea-absolve"
        : "http://localhost:3000",
    responseType: "json",
  };
  if (!config) {
    return baseConfig;
  }
  return {
    ...baseConfig,
    ...config,
  };
};

export default AxiosConfig;
