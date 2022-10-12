import axios from 'axios';

export const BASE_URL = 'http://192.168.10.2:5000';

export const api = axios.create({
  baseURL: BASE_URL,
});
