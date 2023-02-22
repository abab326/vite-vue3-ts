import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";
export interface RequestInterceptors {
  // 请求拦截
  requestInterceptors?: (
    config: InternalAxiosRequestConfig
  ) => InternalAxiosRequestConfig;
  requestInterceptorsCatch?: (err: any) => any;
  // 响应拦截
  responseInterceptors?: <T>(config: AxiosResponse<T>) => AxiosResponse<T>;
  responseInterceptorsCatch?: (err: any) => any;
}
// 自定义传入的参数
export interface RequestConfig extends InternalAxiosRequestConfig {
  interceptors?: RequestInterceptors;
}
