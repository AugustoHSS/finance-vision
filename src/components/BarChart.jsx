import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,CartesianGrid } from "recharts";

const data = [
  { day: "Mon", value: 10 },
  { day: "Tue", value: 20 },
  { day: "Wed", value: 30 },
  { day: "Thu", value: 15 },
  { day: "Fri", value: 10},
  { day: "Sat", value: 10.5 },
  { day: "Sun", value: 20 },
];

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          background: "#fff",
          padding: "10px",
          borderRadius: "5px",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)",
          fontSize: "14px",
          fontWeight: "bold",
        }}
      >
        ${payload[0].value.toLocaleString()}
      </div>
    );
  }
  return null;
};

const UserChart = () => (
  <ResponsiveContainer width="100%" height={250}>
    <BarChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
      />
      <YAxis
        axisLine={false}
        tickLine={false}
        tickCount={6}
      />

      <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(200, 200, 200, 0.0)" }} />

      <Bar
        dataKey="value"
        fill="#2c2c2c"
        barSize={60}
        radius={[0, 0, 10, 10]}
        background={{ fill: "#f1eee4", radius: 10 }}
      />
    </BarChart>
  </ResponsiveContainer>
);

export default UserChart;
