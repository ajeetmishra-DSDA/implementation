import axiosInstance from '../api/axiosConfig';

// Adjust these endpoint paths to match your Spring Boot AuthController
const AUTH_ENDPOINTS = {
  SIGNUP: '/auth/signup',
  LOGIN: '/auth/login',
};

export const signup = async (payload) => {
  // payload: { name, email, password }
  const response = await axiosInstance.post(AUTH_ENDPOINTS.SIGNUP, payload);
  return response.data;
};

export const login = async (payload) => {
  // payload: { email, password }
  const response = await axiosInstance.post(AUTH_ENDPOINTS.LOGIN, payload);
  // Expecting backend response shape: { token, user: { id, name, email } }
  if (response.data?.token) {
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data.user || {}));
  }
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

export const getCurrentUser = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
