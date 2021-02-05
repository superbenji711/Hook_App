import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:19002/',
  responseType: 'json',
});

export default API;
