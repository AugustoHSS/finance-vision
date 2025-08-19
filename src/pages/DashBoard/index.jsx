import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    DashboardSearch,
    Statics,
    MonthlyProfits,
    ThisWeek,
    LastOrders,
    LastTips,
} from './dashBoard.styled';
import WeekChart from '../../components/BarChart';
import DoughnutChart from '../../components/DoughnutChart';

export default function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
        if (!token) {
            navigate('/login');
        }
    }, [navigate]);

    return (
        <Container>
            <DashboardSearch>Dashboard Search</DashboardSearch>
            <Statics>Statics

            </Statics>
            <MonthlyProfits>
                <h2>Monthly Profits</h2>
                <h3>Total Profit growth of x%</h3>
                <DoughnutChart />
            </MonthlyProfits>
            <ThisWeek>
                <h2>This Week</h2>
                <p>Growth +45%</p>
                <WeekChart />
            </ThisWeek>
            <LastTips>
                <h2>Lasts Tips</h2>
            </LastTips>
            <LastOrders>Last Orders
            </LastOrders>
        </Container>
    );
}
