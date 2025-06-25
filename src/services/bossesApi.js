import api from './api';

export async function getBosses() {
    const response = await api.get('/bosses');
    return response.data;
}
