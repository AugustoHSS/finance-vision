import api from './api';

export async function createSession(data, token) {

    const response = await api.post('/services', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
