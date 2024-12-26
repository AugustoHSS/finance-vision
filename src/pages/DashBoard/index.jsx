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
      <MonthlyProfits>Monthly Profits</MonthlyProfits>
      <UsersInLastWeek>
        <p>Users in the Last Week</p>
        <p>+ 45%</p>
        <UserChart/ >
      </UsersInLastWeek>
      <Top></Top>
      <LastOrders>Last Orders</LastOrders>
    </Container>
  );
}
