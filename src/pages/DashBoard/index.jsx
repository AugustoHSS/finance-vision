import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DashboardSearch,
  Statics,
  MonthlyProfits,
  UsersInLastWeek,
  LastOrders,
  Top
} from "./dashBoard.styled";
import UserChart from "../../components/BarChart"
import DoughnutChart from "../../components/DoughnutChart"; 

export default function Dashboard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
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
	        <DoughnutChart/ >
      </MonthlyProfits>
      <UsersInLastWeek>
        <h2>Users in the Last Week</h2>
        <p>+ 45%</p>
        <UserChart/ >
      </UsersInLastWeek>
      <Top></Top>
      <LastOrders>Last Orders</LastOrders>
    </Container>
  );
}
