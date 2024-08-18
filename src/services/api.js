import axios from 'axios';

const BASE_URL = 'http://localhost:5000';

async function createUser(user) {
  await axios.post(`${BASE_URL}/signup`, user);
}

async function login(user) {
  await axios.post(`${BASE_URL}/signin`, user);
}
const api = {
  createUser,
  login,
};

export default api;