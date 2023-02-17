import axios from 'axios';
import { baseURL } from '../config/serverconfig';

let headers = {};
var token = '';

const gettoken = () => {
  var mytoken = sessionStorage.getItem('token')
  if (mytoken) {
    mytoken = JSON.parse(mytoken);
    token = mytoken;
    return token;
  }
  return;
}

gettoken();

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
