import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://www.metaweather.com/api/location',
});
