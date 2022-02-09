import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

let myHeaders = {};

const axiosInstance = axios.create({
  baseURL: '',
  headers: myHeaders,
});

axiosInstance.interceptors.request.use(
  async (config: any) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: Error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response: any) =>
    new Promise((resolve, reject) => {
      resolve(response);
    }),
  (error: any) => {
    if (!error.response) {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }

    if (error.response.status === 403) {
      //navigate(LOGOUT, {tokenExpired: true});
    } else {
      return new Promise((resolve, reject) => {
        reject(error);
      });
    }
  },
);

export default axiosInstance;
