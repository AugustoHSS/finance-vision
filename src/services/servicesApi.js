import api from './api';

export async function createService(data, token) {

    const response = await api.post('/services', data, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}

export async function getServicesTotals(token) {

    const response = await api.get('/services/monthly-totals', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
}
