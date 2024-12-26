import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "search search profits"
    "statics statics profits"
    "users users top"
    "orders orders top";
  grid-template-columns: 1.8fr 1fr 1fr;
  grid-template-rows: 0.4fr 1.1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;
`;

export const DashboardSearch = styled.div`
  grid-area: search;
  background-color: #f8f7f1;
  padding: 16px;
  text-align: center;
`;

export const Statics = styled.div`
  grid-area: statics;
  background-color: #f8f7f1;
  padding: 16px;
  text-align: center;
`;

export const MonthlyProfits = styled.div`
  grid-area: profits;
  background-color: #ffffff;
  padding: 16px;
  text-align: center;
`;

export const UsersInLastWeek = styled.div`
  grid-area: users;
  background-color: #f8f7f1;
  padding: 16px;
  text-align: left;
`;

export const Top = styled.div`
  grid-area: top;
  background-color: #f1eee4;
  padding: 16px;
  text-align: center;
`;

export const LastOrders = styled.div`
  grid-area: orders;
  background-color: #f8f7f1;
  padding: 16px;
  text-align: center;
`;
