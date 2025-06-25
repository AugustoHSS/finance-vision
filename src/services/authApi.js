import api from './api';

export async function createUser(user) {
    const response = await api.post('/register', user);
    return response.data;
}

export async function login(user) {
    const response = await api.post('/login', user);
    return response.data;
}
