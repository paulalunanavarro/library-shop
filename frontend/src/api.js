import axios from 'axios';

const API_URL = "http://127.0.0.1:8000/api/";

export const login = (credentials) =>
  axios.post(`${API_URL}auth/login/`, credentials);

export const register = (userData) =>
  axios.post(`${API_URL}auth/register/`, userData);
