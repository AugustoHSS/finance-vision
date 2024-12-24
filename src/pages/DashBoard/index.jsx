import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  DashboardSearch,
  Statics,
  MonthlyProfits,
  UsersInLastWeek,
  LastOrders,
} from "./dashBoard.styled";

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
      <Statics>Statics</Statics>
      <MonthlyProfits>Monthly Profits</MonthlyProfits>
      <UsersInLastWeek>Users in the Last Week</UsersInLastWeek>
      <LastOrders>Last Orders</LastOrders>
    </Container>
  );
}
