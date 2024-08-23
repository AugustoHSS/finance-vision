import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function createUser(user) {
  try {
    const response = await axios.post(`${BASE_URL}/signup`, user);
    return response.data;
  } catch (error) {
    alert(error?.message || 'error');
  }

}

async function login(user) {
  try {
    const response = await axios.post(`${BASE_URL}/signin`, user);
    return response.data;
  } catch (error) {
    alert(error?.message || 'error');
  }

}
const api = {
  createUser,
  login,
};

export default api;