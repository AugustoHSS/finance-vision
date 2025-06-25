import { useEffect } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip  } from 'recharts';
import { getServicesTotals } from '../services/servicesApi.js';

const data = [
    { name: 'Service Dolar', value: 784.5, color: '#8b8efa' },
    { name: 'Service M', value: 0, color: '#ffe5a2' },
    { name: 'External Jobs', value: 54, color: '#826f5e' },
    { name: 'Tips', value: 100, color: '#c6d0bc' },
];

const total = data.reduce((acc, entry) => acc + entry.value, 0);

const DoughnutChart = () => {
    useEffect(() => {
        async function fetchBosses() {
            try {
                const auth = localStorage.getItem('authToken');
                const totals = await getServicesTotals(auth);
                console.log('Service Totals:', totals);

            } catch (err) {
                console.error('Erro ao buscar bosses:', err);
            }
        }
        fetchBosses();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '30px' }}>

            <div style={{ width: 200, height: 200, position: 'relative' }}>
                <ResponsiveContainer>
                    <PieChart>
                        <Tooltip/>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            innerRadius="71%"
                            outerRadius="98%"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>

                {/* Texto central */}
                <div
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        textAlign: 'center',
                        fontWeight: 'bold',

                    }}
                >
                    <div style={{ fontSize: '16px', color: '#999' }}>Total</div>
                    <div style={{ fontSize: '24px', color: '#333' }}>${total}</div>
                </div>
            </div>

            {/* Detalhes laterais */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {data.map((entry) => (
                    <div
                        key={entry.name}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '4px',
                        }}
                    >

                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
                            <span style={{ color: '#999', fontSize: '13px' }}>{entry.name}</span>
                            <span style={{ color: '#000', fontWeight: 'bold', fontSize: '16px' }}>
                                {((entry.value / total) * 100).toFixed(0) }%
                            </span>
                        </div>

                        {/* Barra de progresso */}
                        <div
                            style={{
                                width: '100px',
                                height: '4px',
                                backgroundColor: '#eee',
                                borderRadius: '2px',
                                position: 'relative',
                            }}
                        >
                            <div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: entry.color,
                                    borderRadius: '2px',
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DoughnutChart;
