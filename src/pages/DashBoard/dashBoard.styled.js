import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-areas:
    "search search profits"
    "statics statics profits"
    "users users top"
    "orders orders top";
  grid-template-columns: 1.8fr 0.9fr 1fr;
  grid-template-rows: 0.4fr 1.1fr 1fr 1fr;
  height: 100vh;
  width: 100vw;

  h2{
    font-size: 19px;
    color: black;
    font-weight: 500;
    margin-bottom: 8px;
    margin-left: 18px;
  }
  h3{
    font-size: 14px;
    color: #999;
    font-weight: 400;
    margin-bottom: 3px;
    margin-left: 18px;
  }
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
  text-align: left;
  h3{
    margin-bottom: 15px;
  }
`;

export const ThisWeek = styled.div`
  grid-area: users;
  background-color: #f8f7f1;
  padding-left: 2%;
  text-align: left;
  p{
    padding: 0 0 15px 2%;
  }
`;

export const LastTips = styled.div`
  grid-area: top;
  background-color: #f1eee4;
  padding: 16px;
  text-align: left;
  h2{
    padding: 15px 0 0 5px;
  }
`;

export const LastOrders = styled.div`
  grid-area: orders;
  background-color: #f8f7f1;
  padding: 16px;
  text-align: center;
`;
