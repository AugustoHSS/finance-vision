import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "search profits profits"
    "statics profits profits"
    "users users users"
    "orders orders orders";
  grid-template-columns: 5fr 1fr 1fr;
  grid-template-rows: 0.4fr 1.1fr 1fr 1fr;
  gap: 16px;
  padding: 16px;
  height: 100vh;
  width: 100vw;
`;

export const DashboardSearch = styled.div`
  grid-area: search;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  text-align: center;
`;

export const Statics = styled.div`
  grid-area: statics;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  text-align: center;
`;

export const MonthlyProfits = styled.div`
  grid-area: profits;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  text-align: center;
`;

export const UsersInLastWeek = styled.div`
  grid-area: users;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  text-align: center;
`;

export const LastOrders = styled.div`
  grid-area: orders;
  border: 2px solid #ccc;
  border-radius: 8px;
  background-color: #fff;
  padding: 16px;
  text-align: center;
`;
