import api from './api';

export async function createUser(user) {
      const response = await api.post(`/signup`, user);
      return response.data;
}

export async function login(user) {
      const response = await api.post(`/signin`, user);
      return response.data;
}