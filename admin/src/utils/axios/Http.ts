import { state } from './../../store/ui/index';
// this abstract class is responsible for creating axios instance 
// set the base api url
// set the authorization token on requests which use auth middleware
// and finally do some error
import router from '@/router';
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

declare module 'axios' {
  interface AxiosResponse<T = any> extends Promise<T> { }
}

export default abstract class HttpClient {
  protected readonly instance: AxiosInstance;

  public constructor() {
    this.instance = axios.create({
      baseURL: process.env.VUE_APP_API_URL,
    });
    this._initializeRequestInterceptor();
    this._initializeResponseInterceptor();
  }

  private _handleRequest = (config: AxiosRequestConfig) => {
    // const token = localStorage.getItem('token')
    const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzY1Mzk2NDMsImlkIjoxfQ.dzPR6BRSOayuIMm9qpeST_Vb4j0OvMaG3eZpodEoDpM`
    config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  };

  private _initializeRequestInterceptor = () => {
    this.instance.interceptors.request.use(
      this._handleRequest,
      this._handleError,
    );
  };

  private _initializeResponseInterceptor = () => {
    this.instance.interceptors.response.use(
      this._handleResponse,
      this._handleError,
    );
  };



  private _handleResponse = ({ data }: AxiosResponse) => data;

  protected _handleError = (error: any) => {
    if( typeof error.response == 'undefined' ||error.response.status === 500){
      // router.push('/server-error')
    }
    if(error.response.status == 403){
      console.log('unauth')
    }
    Promise.reject(error);
  }

}


