import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const loginUser = async (credentials) => {
  return await axios.post(`${API_URL}/login`, credentials);
};

export const getDashboardData = async (token) => {
  return await axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getMapData = async (token, id) => {
  return await axios.get(`${API_URL}/map/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
